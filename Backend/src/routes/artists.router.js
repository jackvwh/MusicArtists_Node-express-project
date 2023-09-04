import { Router } from 'express';
import { showAllArtists, updateArtist, createArtist, deleteArtist } from '../controllers/artists.controller';
export default Router()
    //artists
    .get('/', showAllArtists)
    .put('/:id', updateArtist)
    .post('/', createArtist)
    .delete('/:id', deleteArtist);
