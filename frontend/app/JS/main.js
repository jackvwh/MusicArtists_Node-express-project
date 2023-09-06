import refreshArtistsList from "./helpers/refreshArtistsList.js";
import { createArtist, updateArtist } from "./services/artists.services.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log('initApp');
    refreshArtistsList();

    document.querySelector("#form-create").addEventListener("submit", createArtist);
    document.querySelector("#form-update").addEventListener("submit", updateArtist);
}
