const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
  filmmaker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  productPlacementOpportunities: [{ type: String }],
});

module.exports = mongoose.model('Film', FilmSchema);
