const { Router } = require("express");
const { addMovie, getAllMovies, deleteMovie } = require("./controller");
const movieRouter = Router();

movieRouter.post("/movies", addMovie);
movieRouter.get("/movies", getAllMovies);
movieRouter.delete("/movies/:id", deleteMovie);

module.exports = movieRouter;