// import 'dotenv/config'
import scrollToTop from '../helpers/scrollToTop.js'
import refreshArtistsList from '../helpers/refreshArtistsList.js';

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
    const title = event.target.title.value;
    const mail = event.target.mail.value;
    const image = event.target.image.value;
    // create a new artist
    const newArtist = { name, title, mail, image };
    const userAsJson = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        // if success, update the users grid
        refreshArtistsList();
        // and scroll to top
        scrollToTop();
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
        scrollToTop();
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
        refreshArtistsList();
    }
}
