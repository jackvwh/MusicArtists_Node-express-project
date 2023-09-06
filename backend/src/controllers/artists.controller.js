import { createArtist_db, deleteArtist_db, readArtists_db, updateArtist_db } from "../services/artists.services.js";

export async function readAllArtists(req, res){
    console.log('readAllArtists');
    const artists = await readArtists_db();
    artists.sort((a, b) => a.name.localeCompare(b.name));
    res.send(artists);
}

export async function createArtist(req, res){
    console.log('createArtist');

    const newArtist = req.body;
    newArtist.id = Date.now();
    console.log(newArtist);

    const artist = createArtist_db(newArtist);
    console.log(artist);

    res.json(artist);
}

export async function updateArtist(req, res){
    console.log('updateArtist');

    const artistId = req.params.id;
    const id = parseInt(artistId);

    const updatedArtist = req.body;
    updatedArtist.id = id;
    console.log(updatedArtist);

    const artist = updateArtist_db(updatedArtist);
    console.log(artist);

    res.json(artist);
}

export async function deleteArtist(req, res){
    console.log('deleteArtist');
    const artistId = req.params.id;
    const id = parseInt(artistId);

    const artist = deleteArtist_db(id);
    console.log(artist);

    res.json(artistToDelete);
}