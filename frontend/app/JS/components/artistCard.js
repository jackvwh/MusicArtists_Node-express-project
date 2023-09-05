import deleteArtist from "../services/deleteArtist.js";
import selectArtist from "../helpers/selectArtist.js";

export default function artistCard (artist){

    document.querySelector("#artist-grid").insertAdjacentHTML(
        "beforeend", /*html*/ `
        <article>
            <img src="${artist.image}">
            <h2>${artist.name}</h2>
            <p>${artist.title}</p>
            <a href="mailto:${artist.mail}">${artist.mail}</a>
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