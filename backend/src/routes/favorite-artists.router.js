import {  Router } from 'express';
import {  readFavoriteArtists, createFavoriteArtist, deleteFavoriteArtist } from '../controllers/favorite-artists.controller.js';

export default Router()
    .get('/', readFavoriteArtists)  
    .post('/', createFavoriteArtist)
    .put('/:id', createFavoriteArtist)
    .delete('/:id', deleteFavoriteArtist);
    