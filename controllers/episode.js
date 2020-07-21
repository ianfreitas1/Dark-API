const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const Episode = require('../models/Episode');

exports.getEpisodes = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedResults);
});

exports.getEpisode = asyncHandler(async (req, res, next) => {
  const episode = await Episode.findOne({ episode_id: req.params.id });

  if (!episode) {
    return next(new ErrorResponse('Episode not found', 404));
  }

  return res.status(200).json({ success: true, data: episode });
});

exports.getRandomEpisode = asyncHandler(async (req, res, next) => {
  const episodes = await Episode.find();
  const randomNumber = Math.floor(Math.random() * episodes.length) + 1;

  const randomEpisode = await Episode.findOne({ episode_id: randomNumber });

  return res.status(200).json({ success: true, data: randomEpisode });
});
