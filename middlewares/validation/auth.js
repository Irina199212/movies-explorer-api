const { celebrate, Joi } = require('celebrate');

module.exports.signUp = celebrate({
  body: Joi.object()
    .keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
});

module.exports.signIn = celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
});
