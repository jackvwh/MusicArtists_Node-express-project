import { openArtistForm, refreshArtistsList } from "./helpers/artists.helpers.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log('initApp');
    refreshArtistsList();

    document.querySelector("#btn-create-artist").addEventListener("click", () => openArtistForm("create"));
    document.querySelector("#favorite-artists").addEventListener("click", refreshArtistsList);
    document.querySelector("#show-all-artists").addEventListener("click", refreshArtistsList);
}
