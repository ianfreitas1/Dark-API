const asyncHandler = require('../middlewares/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const Character = require('../models/Character');

exports.getCharacters = asyncHandler(async (req, res, next) => {
  const characters = await Character.find();

  return res
    .status(200)
    .json({ success: true, count: characters.length, data: characters });
});

exports.getCharacter = asyncHandler(async (req, res, next) => {
  const character = await Character.findOne({ char_id: req.params.id });

  if (!character) {
    return next(new ErrorResponse('Character not found', 404));
  }

  return res.status(200).json({ success: true, data: character });
});
