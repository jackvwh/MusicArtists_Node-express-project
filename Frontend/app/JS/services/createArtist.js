import 'dotenv/config.js';
import showAllArtist from "./showAllArtist.js";

// create artist
export default async function createArtist(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const title = event.target.title.value;
    const mail = event.target.mail.value;
    const image = event.target.image.value;
    // create a new artist
    const newArtist = { name, title, mail, image };
    const userAsJson = JSON.stringify(newArtist);
    const response = await fetch(`${process.env.ENDPOINT_URL}/artists`, {
        method: "POST",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        // if success, update the users grid
        showAllArtist();
        // and scroll to top
        scrollToTop();
    }
}
