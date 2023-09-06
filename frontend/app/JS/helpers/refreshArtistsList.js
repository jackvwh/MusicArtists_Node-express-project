import showAllArtists from "./showAllArtists.js";
import readArtists from "../services/artists.services.js";

export default async function refreshArtistsList() {
    console.log('updateArtistsList');
    const artists = await readArtists();
    console.log(artists);
    showAllArtists(artists);
}