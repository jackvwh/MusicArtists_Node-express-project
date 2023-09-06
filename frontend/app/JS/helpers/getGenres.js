// Purpose: get genres from form and return array of genres
export default function getGenres() {

    const genres = []

    const genreValues = {
        "Rap": document.querySelector("#rap").checked,
        "Pop": document.querySelector("#pop").checked,
        "Rock": document.querySelector("#rock").checked,
        "Reggae": document.querySelector("#reggae").checked,
        "R&B": document.querySelector("#rnb").checked,
        "Hip-Hop": document.querySelector("#hipHop").checked,
        "Country": document.querySelector("#country").checked,
        "Jazz": document.querySelector("#jazz").checked,
        "Blues": document.querySelector("#blues").checked,
        "Electronic": document.querySelector("#electronic").checked,
        "Folk": document.querySelector("#folk").checked,
        "Latin": document.querySelector("#latin").checked,
        "Metal": document.querySelector("#metal").checked,
        "Soul": document.querySelector("#soul").checked,
        "Classical": document.querySelector("#classical").checked,
    }
    
    // save only checked genres in array
    for (const genre in genreValues) {
        if (genreValues[genre]) {
            genres.push(genre);
        }
    }  

    return genres;
}


