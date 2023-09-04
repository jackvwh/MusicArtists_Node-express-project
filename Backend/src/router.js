import { Router } from "express";
import artistsRouter from "./routes/artists.router";

export default Router()
    .use('/artists', artistsRouter);

