import { readFavoriteArtists_db, createFavoriteArtist_db, updateFavoriteArtist_db, deleteFavoriteArtist_db } from '../services/favorite-artist.services.js'

export async function readFavoriteArtists(req, res){
    console.log('readFavoriteArtists');
    const favoriteArtists = await readFavoriteArtists_db();
    favoriteArtists.sort((a, b) => a.name.localeCompare(b.name));
    res.send(favoriteArtists);
}

export async function createFavoriteArtist(req, res){
    console.log('createFavoriteArtist');

    const newArtist = req.body;
    newArtist.id = Date.now(); 
    const artist = await createFavoriteArtist_db(newArtist);

    res.json(artist);
}

export async function updateFavoriteArtist(req, res){
    console.log('updateFavoriteArtist');

    const artistId = req.params.id;
    const id = parseInt(artistId);

    const updatedArtist = req.body;
    updatedArtist.id = id;

    const artist = await updateFavoriteArtist_db(updatedArtist);

    res.json(artist);
}

export async function deleteFavoriteArtist(req, res){
    console.log('deleteFavoriteArtist');
    const artistId = req.params.id;
    const id = parseInt(artistId);

    const artist = await deleteFavoriteArtist_db(id);

    res.json(artist);
}