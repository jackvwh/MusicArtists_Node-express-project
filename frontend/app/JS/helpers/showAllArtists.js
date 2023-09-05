import artistCard from "../components/artistCard.js";
import deleteArtist from "../services/deleteArtist.js";
import selectArtist from "./selectArtist.js";

// display all artists from given list
export default function showAllArtists(list) {
    // reset <section id="artist-grid" class="grid-container">...</section>
    document.querySelector("#artist-grid").innerHTML = "";
    //loop through all artists and create an article with content for each
    for (const artist of list) {
        artistCard(artist);
    }
}