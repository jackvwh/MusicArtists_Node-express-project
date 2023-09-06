import { artistFormCreate } from "./components/forms/artist-form-create.js";
import { refreshArtistsList, refreshFavoriteArtistsList } from "./helpers/artists.helpers.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log('initApp');
    refreshArtistsList();

    document.querySelector("#btn-create-artist").addEventListener("click", artistFormCreate);
    document.querySelector("#favorite-artists").addEventListener("click", refreshFavoriteArtistsList);
}
