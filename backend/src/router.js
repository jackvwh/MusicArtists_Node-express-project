import { Router } from "express";
import artistsRouter from "./routes/artists.router.js"; 
import homeRouter from "./routes/home.router.js";
import favoriteArtistsRouter from "./routes/favorite-artists.router.js";

export default Router()
    .use('/', homeRouter)
    .use('/artists', artistsRouter)
    .use('/favorite-artists', favoriteArtistsRouter);
