const defaultMovieList = [
  { title: '10 Reasons Why', src: '10_REASONS_WHY______-_Ruth_Kadiri_,_Deza_the_Great,_Chidi_Dike,_Ukatu_Genevieve.(480p).mp4', tag: 'Drama' },
  { title: 'A Troubled Heart', src: 'A TROUBLED HEART  - CLINTON JOSHUA, SOMADINA ADINMA, PRECIOUS AKAEZE latest 2023 nigerian full movie-1.mp4', tag: 'Romance' },
  { title: 'A Simple Lie', src: 'A.Simple.Lie.2022.720p.Esub.[9jaRocks.Com].mkv', tag: 'Thriller' },
  { title: 'Along Came Love', src: 'Along_came_love......CHIDI_DIKE_ANNABEL_APARA_KELVIN_BOSCO_FULL_HD_MOVIE...(360p)-1.mp4', tag: 'Love' },
  { title: 'Always in Love With You', src: 'ALWAYS IN LOVE WITH YOU -[BEST OF FRED...E MOVIE] -TOP TRENDING MOVIE. - YouTube.mp4', tag: 'Featured' },
  { title: 'Anniversary', src: 'Anniversary.2025.540p.X265.AAC.[9jaRocks.Com].mkv', tag: 'Drama' },
  { title: 'At Eternity\'s Gate', src: 'At.Eternitys.Gate.2018.WEBRip.x265.mkv', tag: 'Drama' },
  { title: 'A Flicker of Us', src: 'A_FLICKER_OF_US__2026_LATEST_NOLLYWOOD_MOVIE_-_BOLAJI_OGUNMOLA,_AYOOLA_AYOLOLA,_BAMBAM__OLAWUNMI(360p).mp4', tag: 'New' },
  { title: 'A Love to Remember', src: 'A_LOVE_TO_REMEMBER_-_CLINTON_JOSHUA,_MIWA_OLORUNFEMI,_CHIKE_DANIELS_latest_2024_nigerian_movies(360p).mp4', tag: 'Romance' },
  { title: 'A Player\'s Heart', src: 'A_PLAYER\'S_HEART_-_MAURICE_SAM_UCHE_MONTANA_2024_FULL_NIGERIAN_MOVIE.mp4', tag: 'Drama' },
  { title: 'A Tale of Two Daughters', src: 'A_tale_of_two_daughters_-CHINAZA_EZE,_AJANIGO__INIKPI,_MERCY_KENNETH,_UCHECHI_TREASURE,_Chidi,_SARAH(360p).mp4', tag: 'Family' },
  { title: 'A Temporary Driver', src: 'A_TEMPORARY_DRIVER_-_SONIA_UCHE,_CHIKE_DANIELS,_CHISOM_AGOAWUIKE,_Latest_New_Nigerian_Movie(480p).mp4', tag: 'Comedy' },
  { title: 'Bag of Lies', src: 'BAG_OF_LIES__Full_Movie__Nosa_Rex___Obi_Oluebube___2026_Latest_Nollywood_Comedy_#movie_#trending(360p).mp4', tag: 'Comedy' },
  { title: 'Before My Ex', src: 'BEFORE_MY_EX_-_MAURICE_SAM,_SOPHIA_ALAKIJA,_TREASURE_NWABEKE,_QUEEN_ELIZABETH_Akuma(18).mp4', tag: 'Drama' },
  { title: 'Behind the Scenes', src: 'Behind.the.Scenes.2025.480p.x265.AAC.[9jaRocks.Com].mkv', tag: 'Drama' },
  { title: 'Breaking Waves', src: 'BREAKING_WAVES_-_IK_Ogbonna_Jennifer_Obodo_Rosie_Afuwape_Nigerian_Movie_2024_Latest_Full_Movie(360p).mp4', tag: 'Featured' },
  { title: 'Career Day', src: 'Career Day.mp4', tag: 'Comedy' },
  { title: 'Christmas', src: 'Christmas.mp4', tag: 'Family' },
  { title: 'Crime 101', src: 'Crime-101-2026-Fztvseries-ng.mkv', tag: 'Mystery' },
  { title: 'Crisis', src: 'Crisis.2021.480p.WEBRip.x265.mkv', tag: 'Thriller' },
  { title: 'Diary of a Wimpy Kid', src: 'Diary.of.a.Wimpy.Kid.The.Last.Straw.2025.NaijaPrey.com.mkv', tag: 'Animation' },
  { title: 'Fackham Hall', src: 'Fackham.Hall.2025.540p.X265.AAC.[9jaRocks.Com].mkv', tag: 'Drama' },
  { title: 'Hoppers', src: 'Hoppers.2026.NaijaPrey.com.mkv', tag: 'Animation' },
  { title: 'Leaked', src: 'Leaked.2022.720p.[9jaRocks.Com].mkv', tag: 'Drama' },
  { title: 'Maze Runner: The Death Cure', src: 'Maze.Runner.The.Death.Cure.2018.540p.x265.AAC.[9jaRocks.Com] (1).mkv', tag: 'Action' },
  { title: 'Maze Runner: The Scorch Trials', src: 'Maze.Runner.The.Scorch.Trials.2015.540p.x265.AAC.[9jaRocks.Com].mkv', tag: 'Action' },
  { title: 'Me and Mum', src: 'Me and Mum.mp4', tag: 'Family' },
  { title: 'Moving Waist', src: 'MOVING_WAIST__Full_Movie__-_Nosa_Rex,_Stephen,_Bibi_Sonye,_Isoken_#latestnollywoodmovies_#trending(360p).mp4', tag: 'Comedy' },
  { title: 'Mum', src: 'Mum (2).mp4', tag: 'Family' },
  { title: 'Obsessed', src: 'Obsessed.2009.480p.BluRay.x265.[9jaRocks.Com].mkv', tag: 'Drama' },
  { title: 'Run', src: 'Run.mp4', tag: 'Action' },
  { title: 'Shang-Chi and the Legend of the Ten Rings', src: 'Shang-Chi and the Legend of the Ten Rings (2021) (NetNaija.com).mp4', tag: 'Action' },
  { title: 'Sonic the Hedgehog 3', src: 'Sonic_the_Hedgehog_3_[CAM]_480P_250420204414.mp4', tag: 'Animation' },
  { title: 'Teen Titans Go vs Teen Titans', src: 'Teen Titans Go Vs. Teen Titans (2019) (NetNaija.com).mp4', tag: 'Animation' },
  { title: 'The Black Demon', src: 'The Black Demon (2023) (NetNaija.com)-1.mkv', tag: 'Thriller' },
  { title: 'The School for Good and Evil', src: 'The School for Good and Evil (2022) (NetNaija.com).mkv', tag: 'Fantasy' },
  { title: 'The King', src: 'The.King.2019.480p.NF.WEBRip.x265.mkv', tag: 'Drama' },
  { title: 'The Outfit', src: 'The.Outfit.2022.480p.AMZN.WEBRip.x265.[9jaRocks.Com].mkv', tag: 'Thriller' },
  { title: 'The Wedding Year', src: 'The.Wedding.Year.2019.480p.WEBRip.x265.mkv', tag: 'Romance' },
  { title: 'The Boss Baby: Family Business', src: 'The_Boss_Baby_Family_Business_(2021)_(NetNaija.com).mp4', tag: 'Animation' },
  { title: 'Thor: Love and Thunder', src: 'Thor Love and Thunder (2022) (NetNaija.com).mp4', tag: 'Action' },
  { title: 'Thunderbolts', src: 'Thunderbolts_ (2025) (Awafim.tv).mkv', tag: 'Action' },
  { title: 'Tom Clancy\'s Without Remorse', src: 'Tom.Clancys.Without.Remorse.2021.480p.WEBRip.x265.mkv', tag: 'Action' },
  { title: 'Wish', src: 'Wish.2023.480p.WEBRip.x265.[9jaRocks.Com].mkv', tag: 'Animation' }
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

function buildVideoCard(movie) {
  const card = document.createElement('article');
  card.className = 'video-card';

  const video = document.createElement('video');
  video.src = encodeURI(movie.src);
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
