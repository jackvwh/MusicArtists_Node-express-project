import fs from 'fs/promises'; 

export default async function showAllArtists(req, res){
    const artists = await fs.readFile('../../local_db/artists.json');
    const artistsJson = JSON.parse(artists);
    artistsJson.sort((a, b) => a.name.localeCompare(b.name));
    console.log(artistsJson);

    res.send(artistsJson);
}

export async function createArtist(req, res){
    const newArtist = req.body;
    newArtist.id = Date.now();
    console.log(newArtist);

    const artists = await fs.readFile('../../local_db/artists.json');   
    const artistsJson = JSON.parse(artists);

    artistsJson.push(newArtist);
    fs.writeFile('../../local_db/artists.json', JSON.stringify(artistsJson));
    res.json(newArtist);
}

export async function updateArtist(req, res){
    const artistId = req.params.id;
    const id = parseInt(artistId);
    const updatedArtist = req.body;

    const data = await fs.readFile('../../local_db/artists.json');
    const artists = JSON.parse(data);

    const artistToUpdate = artists.find(artist => artist.id === id);
    const index = artists.indexOf(artistToUpdate);
    artists.splice(index, 1, updatedArtist);

    fs.writeFile('../../local_db/artists.json', JSON.stringify(artists));
    res.json(updatedArtist);
}

export async function deleteArtist(req, res){
    const artistId = req.params.id;
    const id = parseInt(artistId);

    const data = await fs.readFile('../../local_db/artists.json');
    const artists = JSON.parse(data);

    const artistToDelete = artists.find(artist => artist.id === id);
    const index = artists.indexOf(artistToDelete);
    artists.splice(index, 1);

    fs.writeFile('../../local_db/artists.json', JSON.stringify(artists));
    res.json(artistToDelete);
}