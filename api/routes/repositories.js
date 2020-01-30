const router = require('express').Router();
const repositoriesController = require('../controllers/repositories');
const repositoriesMiddlewares = require('../middlewares/respositories');

router.get(
  '/languages',
  repositoriesMiddlewares.languagesValidator,
  repositoriesController.languages
);

module.exports = router;
