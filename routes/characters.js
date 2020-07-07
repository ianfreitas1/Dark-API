const express = require('express');
const { getCharacters, getCharacter } = require('../controllers/character');

const router = express.Router();

router.route('/').get(getCharacters);
router.route('/:id').get(getCharacter);

module.exports = router;
