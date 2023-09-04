import 'dotenv/config.js';
import showAllArtists from "./showAllArtists.js";

// delete artists
export default async function deleteArtist(id) {
    const response = await fetch(`${process.env.ENDPOINT_URL}/users/${id}.json`, {
        method: "DELETE"
    });
    if (response.ok) {
        // if success, update the users grid
        showAllArtists();
    }
}
