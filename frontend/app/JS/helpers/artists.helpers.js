import artistCard from '../components/cards/artistCard.js';
import {
  createArtist,
  deleteArtist,
  favoriteArtist,
  readAllArtists,
  updateArtist,
} from '../services/artists.services.js';
import { artistFormCreate } from '../components/forms/artist-form-create.js';
import { artistFormUpdate } from '../components/forms/artist-form-update.js';

const genreCodes = {
  Rap: 'rap',
  Pop: 'pop',
  Rock: 'rock',
  Reggae: 'reggae',
  'R&B': 'rnb',
  'Hip-Hop': 'hipHop',
  Country: 'country',
  Jazz: 'jazz',
  Blues: 'blues',
  Electronic: 'electronic',
  Latin: 'latin',
  Folk: 'folk',
  Classical: 'classical',
  Metal: 'metal',
  Soul: 'soul',
};

const labelCodes = {
  'XL Recordings': 'xlRecordings',
  'Columbia Records': 'columbiaRecords',
  'Def Jam Recordings': 'defJamRecordings',
  'Roc Nation': 'rocNation',
  RBMG: 'rbmg',
  'OVO Sound': 'ovoSound',
  'Parkwood Entertainment': 'parkwoodEntertainment',
  'Top Dawg Entertainment': 'topDawgEntertainment',
  'Interscope Records': 'interscopeRecords',
  'Atlantic Records': 'atlanticRecords',
  'Asylum Records': 'asylumRecords',
};
export async function refreshArtistsList(event) {
  let favorites = false;
  // grundet kald fra andre moduler uden event
  if (event !== undefined) {
    favorites = event.target.id === 'favorite-artists' ? true : false;
  }
  const artists = await readAllArtists(favorites);
  showAllArtists(artists);
}

export function showAllArtists(list) {
  document.querySelector('#artist-grid').innerHTML = '';
  for (const artist of list) {
    showArtist(artist);
  }
}

export function openArtistForm(formType) {
  document.querySelector('#dialog').innerHTML = '';

  console.log(formType);
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
