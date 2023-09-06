import artistCard from "../components/artistCard.js";

export default function showAllArtists(list) {
    document.querySelector("#artist-grid").innerHTML = "";
    for (const artist of list) {
        artistCard(artist);
    }
}