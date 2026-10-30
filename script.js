const defaultMovieList = [
  { title: 'A Temporary Driver', src: 'videos/A_TEMPORARY_DRIVER_-_SONIA_UCHE,_CHIKE_DANIELS,_CHISOM_AGOAWUIKE,_Latest_New_Nigerian_Movie(480p).mp4', tag: 'Comedy' },
  { title: 'Career Day', src: 'videos/Career Day.mp4', tag: 'Comedy' },
  { title: 'Christmas', src: 'videos/Christmas.mp4', tag: 'Family' },
  { title: 'Me and Mum', src: 'videos/Me and Mum.mp4', tag: 'Family' },
  { title: 'Mum', src: 'videos/Mum (2).mp4', tag: 'Family' },
  { title: 'Run', src: 'videos/Run.mp4', tag: 'Action' },
  { title: 'The School for Good and Evil', src: 'videos/The School for Good and Evil (2022) (NetNaija.com).mkv', tag: 'Fantasy' },
  { title: 'Wish', src: 'videos/Wish.2023.480p.WEBRip.x265.[9jaRocks.Com].mkv', tag: 'Animation' }
];

const DB_NAME = 'videoGalleryDatabase';
const STORE_NAME = 'videos';
let uploadedGalleryVideos = [];
let currentSearchTerm = '';
let currentCategory = 'All';

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveUploadedVideo(file) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const record = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: file.name,
      type: file.type,
      blob: file,
      tag: 'Uploaded',
      createdAt: new Date().toISOString()
    };

    const request = store.put(record);
    request.onsuccess = () => resolve(record);
    request.onerror = () => reject(request.error);
  });
}

async function getUploadedVideos() {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

function formatVideoTitle(name) {
  return name
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function safeVideoUrl(path) {
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function buildVideoCard(movie) {
  const card = document.createElement('article');
  card.className = 'video-card';

  const video = document.createElement('video');
  video.src = safeVideoUrl(movie.src);
  video.controls = true;
  video.preload = 'metadata';
  video.playsInline = true;
  video.setAttribute('aria-label', `${movie.title} video`);

  const info = document.createElement('div');
  info.className = 'video-info';

  const title = document.createElement('h4');
  title.textContent = movie.title;

  const meta = document.createElement('div');
  meta.className = 'video-meta';

  const tag = document.createElement('span');
  tag.className = 'video-tag';
  tag.textContent = movie.tag;
  meta.appendChild(tag);

  const downloadLink = document.createElement('a');
  downloadLink.href = safeVideoUrl(movie.src);
  downloadLink.download = movie.downloadName || movie.src.split('/').pop() || `${movie.title}.mp4`;
  downloadLink.className = 'download-video-btn';
  downloadLink.textContent = 'Download';
  downloadLink.setAttribute('aria-label', `Download ${movie.title}`);
  meta.appendChild(downloadLink);

  if (movie.isUploaded) {
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-video-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', `Delete ${movie.title}`);
    deleteButton.addEventListener('click', async () => {
      await deleteUploadedVideo(movie.id);
      await loadUploadedGallery();
    });
    meta.appendChild(deleteButton);
  }

  info.appendChild(title);
  info.appendChild(meta);
  card.appendChild(video);
  card.appendChild(info);
  return card;
}

async function deleteUploadedVideo(id) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function getFilteredVideos(videos, query = '') {
  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) {
    return videos;
  }

  return videos.filter((movie) => {
    const title = movie.title.toLowerCase();
    const tag = (movie.tag || '').toLowerCase();
    return title.includes(searchTerm) || tag.includes(searchTerm);
  });
}

function getCategoryFilteredVideos(videos, category = currentCategory) {
  if (category === 'All') {
    return videos;
  }

  return videos.filter((movie) => movie.tag === category || (category === 'Uploaded' && movie.isUploaded));
}

function renderGallery(videos, query = currentSearchTerm, category = currentCategory) {
  const gallery = document.getElementById('videoGallery');
  if (!gallery) return;

  gallery.innerHTML = '';

  const allVideos = [...defaultMovieList, ...videos];
  const keywordFiltered = getFilteredVideos(allVideos, query);
  const finalVideos = getCategoryFilteredVideos(keywordFiltered, category);

  if (!finalVideos.length) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No videos match your search or selected category.';
    gallery.appendChild(emptyState);
    return;
  }

  finalVideos.forEach((movie) => {
    gallery.appendChild(buildVideoCard(movie));
  });
}

async function loadUploadedGallery() {
  const uploadedVideos = await getUploadedVideos();
  uploadedGalleryVideos = uploadedVideos.map((video) => ({
    id: video.id,
    title: formatVideoTitle(video.name),
    src: URL.createObjectURL(video.blob),
    downloadName: video.name,
    tag: video.tag || 'Uploaded',
    isUploaded: true
  }));

  renderGallery(uploadedGalleryVideos, currentSearchTerm, currentCategory);
}

async function handleFileUpload(event) {
  const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith('video/'));
  const uploadStatus = document.getElementById('uploadStatus');

  if (!files.length) {
    uploadStatus.textContent = 'Please choose a valid video file.';
    return;
  }

  try {
    for (const file of files) {
      await saveUploadedVideo(file);
    }

    uploadStatus.textContent = `${files.length} video(s) saved and ready to watch.`;
    event.target.value = '';
    await loadUploadedGallery();
  } catch (error) {
    console.error(error);
    uploadStatus.textContent = 'Something went wrong while saving your video.';
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  const uploadInput = document.getElementById('videoUpload');
  const searchInput = document.getElementById('videoSearch');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (uploadInput) {
    uploadInput.addEventListener('change', handleFileUpload);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      currentSearchTerm = event.target.value;
      renderGallery(uploadedGalleryVideos, currentSearchTerm, currentCategory);
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchTerm = '';
      renderGallery(uploadedGalleryVideos, currentSearchTerm, currentCategory);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentCategory = button.dataset.filter || 'All';
      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      renderGallery(uploadedGalleryVideos, currentSearchTerm, currentCategory);
    });
  });

  renderGallery([], currentSearchTerm, currentCategory);
  await loadUploadedGallery();
});
