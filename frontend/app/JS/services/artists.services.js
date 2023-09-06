// import 'dotenv/config'
import getGenres from '../helpers/getGenres.js';
import getLabels from '../helpers/getLabels.js';
import showArtist from '../helpers/showArtist.js';

// const endpoint = process.env.ENDPOINT_URL;
const endpoint = 'http://localhost:3000';

// read All artists
export async function readArtists() {
    console.log('readArtists');
    const response = await fetch(`${endpoint}/artists`);
    const artists = await response.json();
    return artists;
}

// read one artist
export async function readArtist(id) {
    console.log('readArtist');
    const response = await fetch(`${endpoint}/artists/${id}`);
    console.log(response);
    const artist = await response.json();
    return artist;
}

// create artist
export async function createArtist(event) {
    console.log("createArtist");
    event.preventDefault();

    document.querySelector("#dialog").closeModal();

    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const image = event.target.image.value;
    const shortDescription = event.target.shortDescription.value;
    const website = event.target.website.value;

    const genres = getGenres();
    const labels = getLabels();
    
    // create a new artist
    const newArtist = { name, birthdate, activeSince, image, shortDescription, website, genres, labels};
    const userAsJson = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(response);

    if (response.ok) {
        showArtist(newArtist.name);
    }
}

// update artist
export async function updateArtist(event) {
    console.log('updateArtist');
    event.preventDefault();

    document.querySelector("#dialog").closeModal();

    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const image = event.target.image.value;
    const shortDescription = event.target.shortDescription.value;
    const website = event.target.website.value;

    const genres = getGenres();
    const labels = getLabels();

    // update user
    const userToUpdate = { name, birthdate, activeSince, image, shortDescription, website, genres, labels};
    const userAsJson = JSON.stringify(userToUpdate);

    const response = await fetch(`${endpoint}/artists/${event.target.id}`, {
        method: "PUT",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        showArtist(event.target.id);
    }
}

// delete artists
export async function deleteArtist(id) {
    console.log('deleteArtist', id);
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        
        document.querySelector(`#${id}`).remove();
    }
}
