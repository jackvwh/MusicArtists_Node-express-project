import {
  createArtist,
  deleteArtist,
  favoriteArtist,
  readAllArtists,
  updateArtist,
} from '../services/artists.services.js';
import { artistFormCreate } from '../components/forms/artist-form-create.js';
import { artistFormUpdate } from '../components/forms/artist-form-update.js';
import artistCard from '../components/cards/artistCard.js';

const genreCodes = {
  Rap: 'rap',
  Pop: 'pop',
  Rock: 'rock',
  Reggae: 'reggae',
  Country: 'country',
  Jazz: 'jazz',
  Blues: 'blues',
  Electronic: 'electronic',
  Latin: 'latin',
  Folk: 'folk',
  Classical: 'classical',
  Metal: 'metal',
  Soul: 'soul',
  'R&B': 'rnb',
  'Hip-Hop': 'hiphop',
};

const labelCodes = {
  RBMG: 'rbmg',
  'XL Recordings': 'xlRecordings',
  'Columbia Records': 'columbiaRecords',
  'Def Jam Recordings': 'defJamRecordings',
  'Roc Nation': 'rocNation',
  'OVO Sound': 'ovoSound',
  'Parkwood Entertainment': 'parkwoodEntertainment',
  'Top Dawg Entertainment': 'topDawgEntertainment',
  'Interscope Records': 'interscopeRecords',
  'Atlantic Records': 'atlanticRecords',
  'Asylum Records': 'asylumRecords',
};
export async function refreshArtistsList(event) {
  //get fresh list of artists
  const artists = await readAllArtists();

  // check if event is undefined because of page load
  if (event !== undefined) {
    const id = event.target.id;
    const value = event.target.value;

    // get filtered or sorted list of artists
    if (value === 'all' || id === 'show-all-artists') {
      showAllArtists(artists);
    } else if (
      id === 'filter-genre' ||
      id === 'filter-label' ||
      id === 'favorite-artists'
    ) {
      const filteredArtists = filterArtists(id, value, artists);
      showAllArtists(filteredArtists);
    } else if (id === 'sort-artists') {
      const sortedArtists = sortArtists(value, artists);
      showAllArtists(sortedArtists);
    }
  } else {
    showAllArtists(artists);
  }
}

function showAllArtists(list) {
  document.querySelector('#artist-grid').innerHTML = '';
  for (const artist of list) {
    showArtist(artist);
  }
}

function filterArtists(id, value, artists) {
  let filteredArtists = [];

  if (id === 'filter-genre') {
    filteredArtists = artists.filter(artist => {
      if (artist.genres.includes(value)) {
        return artist;
      }
    });
  } else if (id === 'filter-label') {
    filteredArtists = artists.filter(artist => {
      if (artist.labels.includes(value)) {
        return artist;
      }
    });
  } else if (id === 'favorite-artists') {
    filteredArtists = artists.filter(artist => {
      if (artist.favorite === true) {
        return artist;
      }
    });
  }
  return filteredArtists;
}

function sortArtists(value, artists) {
  let sortedArtists = [];

  if (value === 'z-a') {
    sortedArtists = artists.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === 'a-z') {
    sortedArtists = artists.sort((a, b) => b.name.localeCompare(a.name));
  } else if (value === 'activeSince') {
    sortedArtists = artists.sort((a, b) => a.activeSince - b.activeSince);
  } else if (value === 'birthdate') {
    sortedArtists = artists.sort((a, b) => a.birthdate - b.birthdate);
  }

  return sortedArtists;
}

export function openArtistForm(formType) {
  document.querySelector('#dialog').innerHTML = '';
  // check if form is create or update
  if (formType === 'create') {
    document
      .querySelector('#dialog')
      .insertAdjacentHTML('beforeend', artistFormCreate());
    document
      .querySelector('#artist-form')
      .addEventListener('submit', createArtist);
  } else if (formType === 'update') {
    document
      .querySelector('#dialog')
      .insertAdjacentHTML('beforeend', artistFormUpdate());
    document
      .querySelector('#artist-form')
      .addEventListener('submit', updateArtist);
  }
  document.querySelector('#btn-close').addEventListener('click', () => {
    document.querySelector('#dialog').close();
  });

  document.querySelector('#dialog').showModal();
}

// Purpose: Show artist in grid
export function showArtist(artist) {
  document
    .querySelector('#artist-grid')
    .insertAdjacentHTML('afterbegin', artistCard(artist));
  document
    .querySelector('#artist-grid article:first-child .btn-delete-artist')
    .addEventListener('click', () => deleteArtist(artist.id));
  document
    .querySelector('#artist-grid article:first-child .btn-update-artist')
    .addEventListener('click', () => selectArtist(artist));
  document
    .querySelector('#artist-grid article:first-child .btn-favorite-artist')
    .addEventListener('click', () => favoriteArtist(artist));
}

// Purpose: Select artist to update
export function selectArtist(artist) {
  // open dialog form
  openArtistForm('update');
  // Set global variable
  const form = document.querySelector('#artist-form');
  // set artist values in form
  form.id = artist.id;
  form.name.value = artist.name;
  form.birthdate.value = artist.birthdate;
  form.activeSince.value = artist.activeSince;
  form.image.value = artist.image;
  form.shortDescription.value = artist.shortDescription;
  form.website.value = artist.website;

  // set genres to checked if artist has genre
  artist.genres.forEach(genre => {
    for (const key in genreCodes) {
      if (key === genre) {
        document.querySelector(`#${genreCodes[key]}`).checked = true;
      }
    }
  });
  // set labels to checked if artist has label
  artist.labels.forEach(label => {
    for (const key in labelCodes) {
      if (key === label) {
        document.querySelector(`#${labelCodes[key]}`).checked = true;
      }
    }
  });
}

// Purpose: Get genres from form and save in array as strings
export function getGenreArray() {
  const genres = [];

  for (const key in genreCodes) {
    if (document.querySelector(`#${genreCodes[key]}`).checked) {
      genres.push(key);
    }
  }

  return genres;
}

// Purpose: Get labels from form and save in array as strings
export function getLabelArray() {
  const labels = [];

  for (const key in labelCodes) {
    if (document.querySelector(`#${labelCodes[key]}`).checked) {
      labels.push(key);
    }
  }

  return labels;
}
