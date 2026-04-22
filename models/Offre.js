const mongoose = require('mongoose');

const OffreSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  entreprise: { type: String, required: true },
  ville: String,
  pays: String,
  domaine: String,
  description: String,
  duree: String,
  remuneration: String,
  competencesRequises: [String],
  dateDebut: Date,
  dateLimite: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Offre', OffreSchema);