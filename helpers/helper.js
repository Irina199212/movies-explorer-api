const validator = require('validator');
const ValidationError = require('../errors/validation');

module.exports.checkUrl = (value) => {
  if (!validator.isURL(value)) throw new ValidationError('Неправильный URL');

  return value;
};
