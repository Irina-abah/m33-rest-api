const { Router } = require("express");
const { addMovie } = require("./controller");
const movieRouter = Router();

movieRouter.post("/movies", addMovie);

module.exports = movieRouter;