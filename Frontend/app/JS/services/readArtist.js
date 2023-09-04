import 'dotenv/config';

// read all artists from database
export default async function readArtist() {
    const response = await fetch(`${process.env.ENDPOINT_URL}/artists`);
    const artists = await response.json();
    return artists;
}