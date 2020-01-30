const { prepareLanguages } = require('../utils');

exports.languages = async (req, res, next) => {
  try {
    const languages = await prepareLanguages(req.options);

    res.status(200).send({
      count: languages.length,
      data: languages
    });
  } catch (error) {
    next(error);
  }
};
