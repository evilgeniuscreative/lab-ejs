const express = require('express');
const router = express.Router();
const { index, about, animals, foods } = require('../controllers/indexController');

router.get('/', index);
router.get('/about', about);
router.get('/animals', animals);
router.get('/foods', foods);

module.exports = router;
