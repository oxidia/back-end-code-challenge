const Joi = require('@hapi/joi');

exports.languagesValidator = Joi.object().keys({
  sort: Joi.string().valid('name', 'repos_count'),
  order: Joi.string()
    .valid('asc', 'desc')
    .default('asc')
});
