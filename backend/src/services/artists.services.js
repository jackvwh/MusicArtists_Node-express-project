import fs from 'fs/promises'; 

export async function readArtists_db(){
    console.log('read artists from db');
    const artists = await fs.readFile('./local_db/artists.json');
    const artistsJson = JSON.parse(artists);
    return artistsJson;
}

export async function createArtist_db(newArtist){
    console.log('create artist in db');

    const artists = await fs.readFile('./local_db/artists.json');   
    const artistsJson = JSON.parse(artists);

    artistsJson.push(newArtist);
    fs.writeFile('./local_db/artists.json', JSON.stringify(artistsJson));
}

export async function updateArtist_db(artistId, updatedArtist){
    console.log('update artist in db');

    const artists = await fs.readFile('./local_db/artists.json');
    const artistsJson = JSON.parse(artists);

    const artistToUpdate = artistsJson.find(artist => artist.id === artistId);
    const index = artistsJson.indexOf(artistToUpdate);
    artistsJson.splice(index, 1, updatedArtist);

    fs.writeFile('./local_db/artists.json', JSON.stringify(artistsJson));
}

export async function deleteArtist_db(artistId){
    console.log('delete artist in db');

    const artists = await fs.readFile('./local_db/artists.json');
    const artistsJson = JSON.parse(artists);

    const artistToDelete = artistsJson.find(artist => artist.id === artistId);
    const index = artistsJson.indexOf(artistToDelete);
    artistsJson.splice(index, 1);

    fs.writeFile('./local_db/artists.json', JSON.stringify(artistsJson));
}
