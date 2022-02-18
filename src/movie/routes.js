const { Router } = require("express");
const { addMovie, getAllMovies } = require("./controller");
const movieRouter = Router();

movieRouter.post("/movies", addMovie);
movieRouter.get("/movies", getAllMovies);

module.exports = movieRouter;