const express = require('express');
const {
  getEpisodes,
  getEpisode,
  getRandomEpisode,
} = require('../controllers/episode');

const router = express.Router();

router.get('/', getEpisodes);
router.get('/random', getRandomEpisode);
router.get('/:id', getEpisode);

module.exports = router;
