import refreshArtistsList from '../helpers/refreshArtistsList.js';

// const endpoint = process.env.ENDPOINT_URL;
const endpoint = 'http://localhost:3000';

// delete artists
export default async function deleteArtist(id) {
    console.log('deleteArtist', id);
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        // if success, update the users grid
        // refreshArtistsList();
    }
}
