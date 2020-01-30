const { languagesValidator } = require('../validators/repositories');
const { prettyError } = require('../utils');

exports.languagesValidator = (req, res, next) => {
  const { value, error } = languagesValidator.validate(req.query, {
    abortEarly: false
  });

  if (!error) {
    req.options = value;
    return next();
  }

  res.status(400).send(prettyError(error));
};
