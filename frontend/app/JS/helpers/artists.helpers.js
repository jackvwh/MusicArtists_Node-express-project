import { artistFormUpdate } from "../components/forms/artist-form-update.js";
import artistCard from "../components/cards/artistCard.js";
import { deleteArtist, favoriteArtist, readAllArtists } from "../services/artists.services.js";

const genreCodes = { Rap:"rap", Pop:"pop", Rock:"rock", Reggae:"reggae", "R&B":"rnb", "Hip-Hop":"hipHop", Country:"country", Jazz:"jazz", Blues:"blues", Electronic:"electronic", Latin:"latin", Folk:"folk", Classical:"classical", Metal:"metal", Soul:"soul" };

const labelCodes = { "XL Recordings":"xlRecordings", "Columbia Records":"columbiaRecords", "Def Jam Recordings":"defJamRecordings", "Roc Nation":"rocNation", "RBMG":"rbmg", "OVO Sound":"ovoSound", "Parkwood Entertainment":"parkwoodEntertainment", "Top Dawg Entertainment":"topDawgEntertainment", "Interscope Records":"interscopeRecords", "Atlantic Records":"atlanticRecords", "Asylum Records":"asylumRecords" };

export async function refreshArtistsList(event) {
    let favorites = false;
    // if event is undefined, then we are loading the page - grundet kald fra andre moduler uden event
    if ( event !== undefined ) {
        favorites = event.target.id === "favorite-artists" ? true : false;
    }
    const artists = await readAllArtists(favorites);
    showAllArtists(artists);
}

export function showAllArtists(list) {
    document.querySelector("#artist-grid").innerHTML = "";
    for (const artist of list) {
        showArtist(artist);
    }
}

export function showArtist(artist) {
    document.querySelector("#artist-grid").insertAdjacentHTML("afterbegin", artistCard(artist)); 
    document
        .querySelector("#artist-grid article:first-child .btn-delete-artist")
        .addEventListener("click", () => deleteArtist(artist.id));
    document
        .querySelector("#artist-grid article:first-child .btn-update-artist")
        .addEventListener("click", () => selectArtist(artist));
    document.querySelector("#artist-grid article:first-child .btn-favorite-artist")
        .addEventListener("click", () => favoriteArtist(artist));

}

// Purpose: Select artist to update
export function selectArtist(artist) {
    console.log("selectArtist");
    // open dialog form
    artistFormUpdate();
    // Set global variable
    const form = document.querySelector("#artist-form");
    // set artist values in form
    form.id = artist.id;
    form.name.value = artist.name;
    form.birthdate.value = artist.birthdate;
    // form.activeSince.value = artist.activeSince;
    form.image.value = artist.image;    
    form.shortDescription.value = artist.shortDescription;
    form.website.value = artist.website;
   
   // make a funtion that sets the genres and labels with a for loop looking at the array of genres and labels compared to the genreCodes and labelCodes keys and if match then document.querySelector(`#${genreCodes[genre].value}`).checked = true;

    // set genres
    artist.genres.forEach(genre => {
        for (const key in genreCodes) {
            if (key === genre) {
                document.querySelector(`#${genreCodes[key]}`).checked = true;
            }
        }
    });
    // set labels
    artist.labels.forEach(label => {
        for (const key in labelCodes) {
            if (key === label) {
                document.querySelector(`#${labelCodes[key]}`).checked = true;
            }
        }
    });
}