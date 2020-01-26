const router = require('express').Router();
const repositoriesController = require('../controllers/repositories');

router.get('/languages', repositoriesController.languages);

module.exports = router;
