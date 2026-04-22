const mongoose = require('mongoose');

const EtudiantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telephone: String,
  ville: String,
  domaine: String,
  competences: [String],
  niveauEtudes: String,
  disponibilite: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Etudiant', EtudiantSchema);