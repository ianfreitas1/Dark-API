const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const Character = require('../models/Character');

exports.getCharacters = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedResults);
});

exports.getCharacter = asyncHandler(async (req, res, next) => {
  const character = await Character.findOne({ char_id: req.params.id });

  if (!character) {
    return next(new ErrorResponse('Character not found', 404));
  }

  return res.status(200).json({ success: true, data: character });
});

exports.getRandomCharacter = asyncHandler(async (req, res, next) => {
  const characters = await Character.find();
  const randomNumber = Math.floor(Math.random() * characters.length) + 1;
  const randomCharacter = await Character.findOne({ char_id: randomNumber });

  return res.status(200).json({ success: true, data: randomCharacter });
});
