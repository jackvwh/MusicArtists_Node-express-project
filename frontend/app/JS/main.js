import { artistFormCreate } from "./components/artist-form-create.js";
import refreshArtistsList from "./helpers/refreshArtistsList.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log('initApp');
    refreshArtistsList();

    document.querySelector("#btn-create-artist").addEventListener("click", artistFormCreate);
}
