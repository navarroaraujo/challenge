const mongoose = require('mongoose');

const PandemicSchema = new mongoose.Schema({
  name: String,
  deaths: String,
  year: String,
  img_url: String,
  history: String,
  contamination: String,
  symptoms: String,
  treatment: String,
});

module.exports = mongoose.model('Pandemic', PandemicSchema);