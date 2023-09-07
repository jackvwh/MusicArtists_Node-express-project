import { createArtist_db, deleteArtist_db, readArtists_db, updateArtist_db } from "../services/artists.services.js";

export async function readAllArtists(req, res){
    console.log('readAllArtists');
    // get query parameter
    const favorite = req.query.favorite
    console.log(favorite);

    const artists = await readArtists_db();

    if (favorite === "true"){
        console.log( 'filtering');
        const filteredArtists = artists.filter(artist => artist.favorite === true).sort((a, b) => a.name.localeCompare(b.name)) ;
        res.send(filteredArtists);
    } else {
        artists.sort((a, b) => a.name.localeCompare(b.name));
        res.send(artists);
    }
}

export async function createArtist(req, res){
    console.log('createArtist');

    const newArtist = req.body;

    const artist = await createArtist_db(newArtist);

    res.json(artist);
}

export async function updateArtist(req, res){
    console.log('updateArtist');

    const id = parseInt(req.params.id);

    const updatedArtist = req.body;
    updatedArtist.id = id;

    const artist = await updateArtist_db(updatedArtist);

    res.json(artist);
}

export async function deleteArtist(req, res){
    console.log('deleteArtist');

    console.log(req.params.id);
    const id = Number(req.params.id);

    console.log(id);
    const artist = await deleteArtist_db(id);

    res.json(artist);
}