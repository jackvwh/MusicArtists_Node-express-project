import {
  createArtist_db,
  deleteArtist_db,
  readArtists_db,
  updateArtist_db,
} from '../services/artists.services.js';

export async function readAllArtists(req, res) {
  // get query parameter
  const favorite = req.query.favorite;

  const artists = await readArtists_db();

  if (favorite === 'true') {
    const filteredArtists = artists
      .filter(artist => artist.favorite === true)
      .sort((a, b) => a.name.localeCompare(b.name))
      .reverse(); // reverse to show latest first - grundet afterbegin insertAdjacentHTML

    res.send(filteredArtists);
  } else {
    artists.sort((a, b) => a.name.localeCompare(b.name)).reverse();

    res.send(artists);
  }
}

export async function createArtist(req, res) {
  const newArtist = req.body;
  const artist = await createArtist_db(newArtist);

  res.json(artist);
}

export async function updateArtist(req, res) {
  const id = parseInt(req.params.id);

  const updatedArtist = req.body;
  updatedArtist.id = id;

  const artist = await updateArtist_db(updatedArtist);

  res.json(artist);
}

export async function deleteArtist(req, res) {
  const id = parseInt(req.params.id);

  const artist = await deleteArtist_db(id);

  res.json(artist);
}
