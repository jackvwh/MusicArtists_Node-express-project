import { artistFormUpdate } from "../components/forms/artist-form-update.js";
import artistCard from "../components/cards/artistCard.js";
import { readAllArtists } from "../services/artists.services.js";

const genreCodes = [ {"Rap": "rap"}, {"Pop": "pop"}, {"Rock": "rock"}, {"Reggae": "reggae"}, {"R&B": "rnb"}, {"Hip-Hop": "hipHop"}, {"Country": "country"}, {"Jazz": "jazz"}, {"Blues": "blues"}, {"Electronic": "electronic"}, {"Latin": "latin"}, {"Folk": "folk"}, {"Classical": "classical"}, {"Metal": "metal"}, {"Soul": "soul"} ]
const labelCodes = [ {"XL Recordings": "xlRecordings"}, {"Columbia Records": "columbiaRecords"}, {"Def Jam Recordings": "defJamRecordings"}, {"Roc Nation": "rocNation"}, {"RBMG": "rbmg"}, {"OVO Sound": "ovoSound"}, {"Parkwood Entertainment": "parkwoodEntertainment"}, {"Top Dawg Entertainment": "topDawgEntertainment"}, {"Interscope Records": "interscopeRecords"}, {"Atlantic Records": "atlanticRecords"}, {"Asylum Records": "asylumRecords"} ]

export async function refreshArtistsList(event) {
    console.log('refreshArtistsList');
    let favorites = false;
    // if event is undefined, then we are loading the page - grundet kald fra main.js uden event
    if ( event !== undefined ) {
        favorites = event.target.id === "favorite-artists" ? true : false;
    }
    console.log(favorites);
    const artists = await readAllArtists(favorites);
    showAllArtists(artists);
}

export function showAllArtists(list) {
    document.querySelector("#artist-grid").innerHTML = "";
    for (const artist of list) {
        artistCard(artist);
    }
}

export function showArtist(artist) {
    console.log('insertArtist');
    // document.querySelector("#artist-grid").insertAdjacentHTML("afterbegin", artistCard(artist));
}

// Purpose: Select artist to update
export function selectArtist(artist) {
    console.log("selectArtist");
    console.log(artist);
    // open dialog form
    artistFormUpdate();
    // Set global variable
    const form = document.querySelector("#artist-form");
    // set artist values in form
    form.id = artist.id;
    form.name.value = artist.name;
    form.birthdate.value = artist.birthdate;
    form.activeSince.value = artist.activeSince;
    form.image.value = artist.image;    
    form.shortDescription.value = artist.shortDescription;
    form.website.value = artist.website;
    // // set genres
    // artist.genres.forEach(genre => {
    //     if (genreCodes.includes(genre)) {
    //         document.querySelector(`#${genreCodes[genre].value}`).checked = true;
    //     }
    // } );
    // // set labels
    // artist.labels.forEach(label => {
    //     if (labelCodes.includes(label)) {
    //         document.querySelector(`#${labelCodes[label]}`).checked = true;
    //     }
    // } );
}