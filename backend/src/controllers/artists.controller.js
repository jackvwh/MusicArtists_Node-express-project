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
    const artist = await createArtist_db(newArtist);

    res.json(artist);
}

export async function updateArtist(req, res){
    console.log('updateArtist');

    const artistId = req.params.id;
    const id = parseInt(artistId);
    console.log(id);

    const updatedArtist = req.body;
    updatedArtist.id = id;
    console.log("upArtist", updatedArtist);

    const artist = await updateArtist_db(updatedArtist);
    console.log(artist);

    res.json(artist);
}

export async function deleteArtist(req, res){
    console.log('deleteArtist');
    const artistId = req.params.id;
    const id = parseInt(artistId);

    const artist = await deleteArtist_db(id);

    res.json(artist);
}