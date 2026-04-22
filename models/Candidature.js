const mongoose = require('mongoose');

const CandidatureSchema = new mongoose.Schema({
  etudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'Etudiant', required: true },
  offre: { type: mongoose.Schema.Types.ObjectId, ref: 'Offre', required: true },
  lettreMotivation: String,
  statut: { type: String, enum: ['en attente', 'acceptee', 'refusee'], default: 'en attente' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Candidature', CandidatureSchema);