const express = require('express');
const { getCharacters } = require('../controllers/character');

const router = express.Router();

router.route('/').get(getCharacters);

module.exports = router;
