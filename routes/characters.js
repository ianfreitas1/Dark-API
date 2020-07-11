const express = require('express');
const {
  getCharacters,
  getCharacter,
  getRandomCharacter,
} = require('../controllers/character');
const advancedResults = require('../middlewares/advancedResults');
const Character = require('../models/Character');

const router = express.Router();

router.get('/', advancedResults(Character), getCharacters);
router.get('/random', getRandomCharacter);
router.get('/:id', getCharacter);

module.exports = router;
