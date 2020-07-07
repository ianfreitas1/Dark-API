const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  char_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    child: String,
    teen: String,
    adult: String,
    elder: String,
  },
  birthYear: String,
  occupation: [String],
  status: String,
  nicknames: [String],
  appearance: [Number],
  portrayed: {
    child: String,
    teen: String,
    adult: String,
    elder: String,
  },
  img: {
    child: String,
    teen: String,
    adult: String,
    elder: String,
  },
});

module.exports = mongoose.model('Character', CharacterSchema);
