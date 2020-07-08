const express = require('express');
const { getEpisodes, getEpisode }  = require('../controllers/episode');

const  router = express.Router();

router.route('/').get(getEpisodes);
router.route('/:id').get(getEpisode);

module.exports = router;