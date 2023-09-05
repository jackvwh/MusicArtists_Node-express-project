import deleteArtist from "../services/deleteArtist.js";
import selectArtist from "../helpers/selectArtist.js";

export default function artistCard(artist){

    document.querySelector("#artist-grid").insertAdjacentHTML(
        "beforeend", /*html*/ `
        <article>
            <img src="${artist.image}">
            <h2>Name: ${artist.name}</h2>
            <h3>Active since: ${artist.activeSince}</h3>
            <h3>Birthday: ${artist.birthdate}</h3>
            <h3>Description: ${artist.shortDescription}</h3>
            <ul> 
            <h3>Genres</h3>
                ${artist.genres.map(genre => `<li>${genre}</li>`).join("")}
            </ul>
            <ul>
            <h3>Labels</h3>
                ${artist.labels.map(label => `<li>${label}</li>`).join("")}
            </ul>
            <h2>Website: ${artist.website}</h2>
             <div class="btns">
                <button class="btn-update-artist">Update</button>
                <button class="btn-delete-artist">Delete</button>
            </div>
        </article>
    `
    );
    document
        .querySelector("#artist-grid article:last-child .btn-delete-artist")
        .addEventListener("click", () => deleteArtist(artist.id));
    document
        .querySelector("#artist-grid article:last-child .btn-update-artist")
        .addEventListener("click", () => selectArtist(artist));
}