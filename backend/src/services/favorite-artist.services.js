import fs from 'fs/promises';

export async function readFavoriteArtists_db(){
    console.log('read favorite artists from db');
    const favoriteArtists = await fs.readFile('./local_db/artist.json');
    const favoriteArtistsJson = JSON.parse(favoriteArtists);
    favoriteArtistsJson.filter(artist => artist.favorite === true);
    return favoriteArtistsJson;
}

export async function createFavoriteArtist_db(newArtist){
    console.log('create favorite artist in db');
    const favoriteArtists = await fs.readFile('./local_db/artist.json');
    const favoriteArtistsJson = JSON.parse(favoriteArtists);

    favoriteArtistsJson.push(newArtist);
    fs.writeFile('./local_db/artist.json', JSON.stringify(favoriteArtistsJson));

    return newArtist;
}

export async function updateFavoriteArtist_db(updatedArtist){
    console.log('update favorite artist in db');

    const favoriteArtists = await fs.readFile('./local_db/artist.json');
    const favoriteArtistsJson = JSON.parse(favoriteArtists);

    const artistToUpdate = favoriteArtistsJson.find(artist => artist.id === updatedArtist.id);
    const index = favoriteArtistsJson.indexOf(artistToUpdate);
    favoriteArtistsJson.splice(index, 1, updatedArtist);

    fs.writeFile('./local_db/artist.json', JSON.stringify(favoriteArtistsJson));

    return updatedArtist;
}

export async function deleteFavoriteArtist_db(artistId){
    console.log('delete favorite artist in db');

    const favoriteArtists = await fs.readFile('./local_db/artist.json');
    const favoriteArtistsJson = JSON.parse(favoriteArtists);

    const artistToDelete = favoriteArtistsJson.find(artist => artist.id === artistId);
    const index = favoriteArtistsJson.indexOf(artistToDelete);
    favoriteArtistsJson.splice(index, 1);

    fs.writeFile('./local_db/artist.json', JSON.stringify(favoriteArtistsJson));
}