// import 'dotenv/config'
import scrollToTop from '../helpers/scrollToTop.js'
import refreshArtistsList from '../helpers/refreshArtistsList.js';
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
    event.preventDefault();
    const name = event.target.name.value;
    const title = event.target.title.value;
    const mail = event.target.mail.value;
    const image = event.target.image.value;
    // update user
    const userToUpdate = { name, title, mail, image };
    const userAsJson = JSON.stringify(userToUpdate);

    const response = await fetch(`${endpoint}/users/${selectedArtist.id}`, {
        method: "PUT",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        // if success, update the users grid
        refreshArtistsList();
        // and scroll to top
    }
}

// delete artists
export async function deleteArtist(id) {
    console.log('deleteArtist', id);
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        // if success, update the users grid
        document.querySelector(`#${id}`).remove();
    }
}
