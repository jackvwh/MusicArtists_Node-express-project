import fs from 'fs/promises';

export async function readArtists_db() {
  const artists = await fs.readFile('./local_db/artists.json');
  const artistsJson = JSON.parse(artists);
  return artistsJson;
}

export async function createArtist_db(newArtist) {
  const artists = await fs.readFile('./local_db/artists.json');
  const artistsJson = JSON.parse(artists);

  artistsJson.push(newArtist);
  fs.writeFile('./local_db/artists.json', JSON.stringify(artistsJson));

  return newArtist;
}

export async function updateArtist_db(updatedArtist) {
  const artists = await fs.readFile('./local_db/artists.json');
  const artistsJson = JSON.parse(artists);

  const artistToUpdate = artistsJson.find(
    artist => artist.id === updatedArtist.id
  );
  const index = artistsJson.indexOf(artistToUpdate);
  artistsJson.splice(index, 1, updatedArtist);

  fs.writeFile('./local_db/artists.json', JSON.stringify(artistsJson));

  return updatedArtist;
}

export async function deleteArtist_db(artistId) {
  const artists = await fs.readFile('./local_db/artists.json');
  const artistsJson = JSON.parse(artists);

  const artistToDelete = artistsJson.find(artist => artist.id === artistId);
  const index = artistsJson.indexOf(artistToDelete);
  artistsJson.splice(index, 1);

  fs.writeFile('./local_db/artists.json', JSON.stringify(artistsJson));
}
