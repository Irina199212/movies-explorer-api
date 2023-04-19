const router = require('express').Router();
const { saveMovie, removeMovie } = require('../middlewares/validation/movie');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', saveMovie, createMovie);

router.delete('/:movieId', removeMovie, deleteMovie);

module.exports = router;
