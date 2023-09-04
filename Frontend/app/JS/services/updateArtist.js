import 'dotenv/config.js';
import showAllArtists from "../showAllArtists.js";
import { selectedArtist } from "../selectArtist.js";
import scrollToTop from "../helpers/scrollToTop.js";
import showAllArtists from './showAllArtists.js';

// update artist
export default async function updateArtist(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const title = event.target.title.value;
    const mail = event.target.mail.value;
    const image = event.target.image.value;
    // update user
    const userToUpdate = { name, title, mail, image };
    const userAsJson = JSON.stringify(userToUpdate);

    const response = await fetch(`${process.env.ENDPOINT_URL}/users/${selectedArtist.id}`, {
        method: "PUT",
        body: userAsJson,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        // if success, update the users grid
        showAllArtists();
        // and scroll to top
        scrollToTop();
    }
}