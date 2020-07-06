const asyncHandler = require('../middlewares/asyncHandler');
const Character = require('../models/Character');

exports.getCharacters = asyncHandler(async (req, res, next) => {
  const characters = await Character.find();

  return res
    .status(200)
    .json({ success: true, count: characters.length, data: characters });
});
