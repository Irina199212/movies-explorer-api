const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const patternurl = require('../helpers/helper');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', celebrate({
  body: Joi.object()
    .keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().pattern(new RegExp(patternurl)),
      trailerLink: Joi.string().required().pattern(new RegExp(patternurl)),
      thumbnail: Joi.string().required().pattern(new RegExp(patternurl)),
      movieId: Joi.string().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: Joi.object()
    .keys({
      movieId: Joi.string().hex().length(24).required(),
    }),
}), deleteMovie);

module.exports = router;
