const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  episode_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  season: {
    type: Number,
    required: true,
  },
  episode: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  },
  air_date: {
    type: String,
  },
  characters: {
    type: Array,
  }
});

module.exports = mongoose.model('Episode', EpisodeSchema);