import showAllArtists from "./showAllArtists.js";
import { readArtists } from "../services/artists.services.js";

export default async function refreshArtistsList() {
    console.log('refreshArtistsList');
    const artists = await readArtists();
    showAllArtists(artists);
}