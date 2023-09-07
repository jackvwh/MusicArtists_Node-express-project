// import 'dotenv/config'
import artistCard from '../components/cards/artistCard.js';
import { showArtist } from '../helpers/artists.helpers.js';
import getGenres from '../helpers/getGenres.js';
import getLabels from '../helpers/getLabels.js';

// const endpoint = process.env.ENDPOINT_URL;
const endpoint = 'http://localhost:3000';

// read All artists
export async function readAllArtists(favorites) {
    console.log('readArtists');
    const response = await fetch(`${endpoint}/artists${favorites ? '?favorite=true' : ''}`);
    const artists = await response.json();
    return artists;
}

// read one artist
export async function readOneArtist(id) {
    console.log('readArtist');
    const response = await fetch(`${endpoint}/artists/${id}`);
    const artist = await response.json();
    return artist;
}

// create artist
export async function createArtist(event) {
    console.log("createArtist");
    event.preventDefault();
    
    document.querySelector("#dialog").close();

    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const image = event.target.image.value;
    const shortDescription = event.target.shortDescription.value;
    const website = event.target.website.value;

    //get genres and labels in arrays
    const genres = getGenres();
    const labels = getLabels();
    
    // create a new artist
    const newArtist = { name, birthdate, activeSince, image, shortDescription, website, genres, labels};
    // varible to hold the id of the new artist
    newArtist.id = Date.now(); 
    // set favorite to false
    newArtist.favorite = false
    const userAsJson = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        showArtist(newArtist);
    }
}

// update artist
export async function updateArtist(event) {
    console.log('updateArtist');
    event.preventDefault();

    document.querySelector("#dialog").close();

    const id = event.target.id;
    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const image = event.target.image.value;
    const shortDescription = event.target.shortDescription.value;
    const website = event.target.website.value;

    const genres = getGenres();
    const labels = getLabels();

    // update artist
    const newArtist = { name, birthdate, activeSince, image, shortDescription, website, genres, labels, id};

    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "PUT",
        body: JSON.stringify(newArtist),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        showArtist(newArtist);
    }
}

// delete artists
export async function deleteArtist(id) {
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        document.querySelector(`#${id}`).remove();
    }
}


// set favorite artists
export async function favoriteArtist(artist) {
    console.log('favoriteArtist');
    let favorite
        if (artist.favorite) { 
             favorite = false;
        }
        else{
             favorite = true;
        }  
        const response = await fetch(`${endpoint}/artists/${artist.id}`, {
            method: "PUT",
            body: JSON.stringify({...artist, favorite:favorite}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            showArtist(artist);
        }
}


