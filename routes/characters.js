const express = require('express');
const { getCharacters, getCharacter } = require('../controllers/character');
const advancedResults = require('../middlewares/advancedResults');
const Character = require('../models/Character');

const router = express.Router();

router.route('/').get(advancedResults(Character), getCharacters);
router.route('/:id').get(getCharacter);

module.exports = router;
