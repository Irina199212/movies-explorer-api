const { celebrate, Joi } = require('celebrate');

const { checkUrl } = require('../../helpers/helper');

module.exports.saveMovie = celebrate({
  body: Joi.object()
    .keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().custom(checkUrl),
      trailerLink: Joi.string().required().custom(checkUrl),
      thumbnail: Joi.string().required().custom(checkUrl),
      movieId: Joi.number().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
});

module.exports.removeMovie = celebrate({
  params: Joi.object()
    .keys({
      movieId: Joi.string().hex().length(24).required(),
    }),
});
