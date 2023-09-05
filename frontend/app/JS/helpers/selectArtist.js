export let selectedArtist = null;

export default function selectArtist(artist) {
    // Set global varaiable
    selectedArtist = artist;
    const form = document.querySelector("#form-update");
    form.name.value = artist.name;
    form.title.value = artist.title;
    form.mail.value = artist.mail;
    form.image.value = artist.image;
    form.scrollIntoView({ behavior: "smooth" });
}