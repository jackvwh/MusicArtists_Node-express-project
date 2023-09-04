
export const selectedArtist = null;

export default function selectArtist(artist) {
    // Set global varaiable
    selectedArtist = artist;
    const form = document.querySelector("#form-update");
    form.name.value = user.name;
    form.title.value = user.title;
    form.mail.value = user.mail;
    form.image.value = user.image;
    form.scrollIntoView({ behavior: "smooth" });
}