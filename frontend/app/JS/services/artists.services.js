// import 'dotenv/config'
import {
  getGenreArray,
  getLabelArray,
  refreshArtistsList,
  showArtist,
} from '../helpers/artists.helpers.js';

// const endpoint = process.env.ENDPOINT_URL;
const endpoint = 'http://localhost:3000';

const artists = []; // local cache of artists

// read All artists - also checks if fetching from server is necessary
export async function readAllArtists() {
  if (artists.length === 0) {
    const response = await fetch(`${endpoint}/artists`);
    const body = await response.json();
    artists.push(...body);

    if (response.ok) {
      return artists;
    } else {
      console.log('Error getting artists');
    }
  } else {
    return artists;
  }
}

// read one artist
export async function readOneArtist(id) {
  const artist = artists.find(artist => artist.id === id);
  return artist;
}

// create artist
export async function createArtist(event) {
  event.preventDefault();

  document.querySelector('#dialog').close();

  const name = event.target.name.value;
  const birthdate = event.target.birthdate.value;
  const activeSince = event.target.activeSince.value;
  const image = event.target.image.value;
  const shortDescription = event.target.shortDescription.value;
  const website = event.target.website.value;

  //get genres and labels in arrays
  const genres = getGenreArray();
  const labels = getLabelArray();

  // create a new artist
  const newArtist = {
    name,
    birthdate,
    activeSince,
    image,
    shortDescription,
    website,
    genres,
    labels,
  };

  // add input validation here

  // variable to hold the id of the new artist
  newArtist.id = Date.now();

  // set favorite to false
  newArtist.favorite = false;

  const userAsJson = JSON.stringify(newArtist);
  const response = await fetch(`${endpoint}/artists`, {
    method: 'POST',
    body: userAsJson,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // show artist
    showArtist(newArtist);
    scrollToTop();
    // add new artist to artists array
    artists.push(newArtist);
  } else {
    console.log('Error creating artist');
  }
}

// update artist
export async function updateArtist(event) {
  event.preventDefault();

  document.querySelector('#dialog').close();

  const id = event.target.id;
  const name = event.target.name.value;
  const birthdate = event.target.birthdate.value;
  const activeSince = event.target.activeSince.value;
  const image = event.target.image.value;
  const shortDescription = event.target.shortDescription.value;
  const website = event.target.website.value;

  const genres = getGenreArray();
  const labels = getLabelArray();

  // update artist
  const newArtist = {
    name,
    birthdate,
    activeSince,
    image,
    shortDescription,
    website,
    genres,
    labels,
    id,
  };

  // add input validation here

  const response = await fetch(`${endpoint}/artists/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newArtist),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // find artist in artists array and update
    const artist = artists.find(artist => artist.id === id);
    artists.splice(artists.indexOf(artist), 1, newArtist);
    refreshArtistsList();
  } else {
    console.log('Error updating artist');
  }
}

// delete artists
export async function deleteArtist(id) {
  const response = await fetch(`${endpoint}/artists/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.getElementById(id).remove();
    // find artist in artists array and delete
    const artist = artists.find(artist => artist.id === id);
    artists.splice(artists.indexOf(artist), 1);
  } else {
    console.log('Error deleting artist');
  }
}

// set favorite artists
export async function favoriteArtist(artist) {
  // if artist is favorite, set favorite to false
  if (artist.favorite) {
    artist.favorite = false;
  } else {
    artist.favorite = true;
  }
  const response = await fetch(`${endpoint}/artists/${artist.id}`, {
    method: 'PUT',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    // find artist in artists array and update list
    const artistToUpdate = artists.find(artist => artist.id === artist.id);
    artists.splice(artists.indexOf(artistToUpdate), 1, artist);
    refreshArtistsList();
  } else {
    console.log('Error updating favorite');
  }
}

// scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
