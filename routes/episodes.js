const express = require('express');
const { getEpisodes, getEpisode, getRandomEpisode }  = require('../controllers/episode');

const  router = express.Router();

router.get('/', getEpisodes);
// router.get('/:id', getEpisode);
router.get('/random', getRandomEpisode);

module.exports = router;