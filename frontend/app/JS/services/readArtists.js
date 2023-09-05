// import 'dotenv/config'

// const endpoint = process.env.ENDPOINT_URL;

// console.log(endpoint);

const endpoint = 'http://localhost:3000';

export default async function readArtists() {
    console.log('readArtists');
    const response = await fetch(`${endpoint}/artists`);
    console.log(response);
    const artists = await response.json();
    return artists;
}