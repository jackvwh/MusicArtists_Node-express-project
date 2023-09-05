import createArtist from "./services/createArtist.js";
import updateArtist from "./services/updateArtist.js";
import refreshArtistsList from "./helpers/refreshArtistsList.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log('initApp');
    refreshArtistsList();

    document.querySelector("#form-create").addEventListener("submit", createArtist);
    document.querySelector("#form-update").addEventListener("submit", updateArtist);
}
