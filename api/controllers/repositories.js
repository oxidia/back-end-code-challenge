const { prepareLanguages } = require('../utils');

exports.languages = (req, res, next) => {
  const languages = prepareLanguages();

  res.status(200).send({
    count: languages.length,
    data: languages
  });
};
