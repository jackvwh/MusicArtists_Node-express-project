import scrollToTop from '../helpers/scrollToTop.js'
import refreshArtistsList from '../helpers/refreshArtistsList.js';

// const endpoint = process.env.ENDPOINT_URL;
const endpoint = 'http://localhost:3000';

// create artist
export default async function createArtist(event) {
    console.log("createArtist");
    event.preventDefault();

    const name = event.target.name.value;
    const title = event.target.title.value;
    const mail = event.target.mail.value;
    const image = event.target.image.value;
    // create a new artist
    const newArtist = { name, title, mail, image };
    const userAsJson = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        // if success, update the users grid
        refreshArtistsList();
        // and scroll to top
        scrollToTop();
    }
}
