const Movie = require("./model");

exports.addMovie = async (req, res) => {
  try {
    const {
      name,
      genre,
      director,
      duration,
      year
    } = req.body;
    const owner = req.user._id;
    const newMovie = await Movie.create({
      name,
      genre,
      director,
      duration,
      year,
      owner
    })
    res.status(200).send({movie: newMovie})
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}