const express = require('express');
const {
  getEpisodes,
  getEpisode,
  getRandomEpisode,
} = require('../controllers/episode');
const advancedResults = require('../middlewares/advancedResults');
const Episode = require('../models/Episode');

const router = express.Router();

router.get('/', advancedResults(Episode), getEpisodes);
router.get('/random', getRandomEpisode);
router.get('/:id', getEpisode);

module.exports = router;
