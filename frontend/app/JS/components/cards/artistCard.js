function createStarSVG() {
  return /*html*/ `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    `;
}

export default function artistCard(artist) {
  const artistCard = /*html*/ `
          <article id="${artist.id}">
            <img src="${artist.image}">
            <h4>${artist.favorite ? createStarSVG() : ''}</h4>
            <h2>Name: ${artist.name}</h2>
            <h3>Active since: ${artist.activeSince}</h3>
            <h3>Birthday: ${artist.birthdate}</h3>
            <h3>Description: ${artist.shortDescription}</h3>
            <ul> 
            <h3>Genres</h3>
                ${artist.genres.map(genre => `<li>${genre}</li>`).join('')}
            </ul>
            <ul>
            <h3>Labels</h3>
                ${artist.labels.map(label => `<li>${label}</li>`).join('')}
            </ul>
            <h2>Website: ${artist.website}</h2>
             <div class="btns">
                <button class="btn-update-artist">Update</button>
                <button class="btn-delete-artist">Delete</button>
                <button class="btn-favorite-artist">Favorite</button>
            </div>
        </article>
        `;
  return artistCard;
}
