import readArtist from "./readArtist";
import deleteArtist from ":/services/deleteArtist.js";
import selectArtist from ":/services/selectArtist.js";

const list = await readArtist();

// display all artists from given list
export default function showAllArtists() {
    // reset <section id="artist-grid" class="grid-container">...</section>
    document.querySelector("#artist-grid").innerHTML = "";
    //loop through all artists and create an article with content for each
    for (const artist of list) {
        document.querySelector("#artist-grid").insertAdjacentHTML(
            "beforeend",
            /*html*/ `
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
}