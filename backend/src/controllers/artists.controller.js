import {
  createArtist_db,
  deleteArtist_db,
  readArtists_db,
  updateArtist_db,
} from '../services/artists.services.js';

export async function readAllArtists(req, res) {
  const artists = await readArtists_db();
  res.json(artists);
}

export async function createArtist(req, res) {
  const newArtist = req.body;

  // add data validation here

  const artist = await createArtist_db(newArtist);

  res.json(artist);
}

export async function updateArtist(req, res) {
  const id = parseInt(req.params.id);
  const updatedArtist = req.body;
  updatedArtist.id = id;

  // add data validation here

  const artist = await updateArtist_db(updatedArtist);

  res.json(artist);
}

export async function deleteArtist(req, res) {
  const id = parseInt(req.params.id);

  const artist = await deleteArtist_db(id);

  res.json(artist);
}
