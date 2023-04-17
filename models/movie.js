const mongoose = require('mongoose');
const validator = require('validator');
const patternurl = require('../helpers/helper');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.matches(v, patternurl);
      },
      message: 'Поле "image" должно быть ссылкой',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.matches(v, patternurl);
      },
      message: 'Поле "trailerLink" должно быть ссылкой',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.matches(v, patternurl);
      },
      message: 'Поле "thumbnail" должно быть ссылкой',
    },
  },
  owner: {
    type: String,
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
