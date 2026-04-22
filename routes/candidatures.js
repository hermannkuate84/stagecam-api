const express = require('express');
const router = express.Router();
const Candidature = require('../models/Candidature');

router.get('/', async (req, res) => {
  try {
    const candidatures = await Candidature.find()
      .populate('etudiant')
      .populate('offre');
    res.json(candidatures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const candidature = new Candidature(req.body);
    const nouvelle = await candidature.save();
    res.status(201).json(nouvelle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const candidature = await Candidature.findByIdAndUpdate(
      req.params.id,
      { statut: req.body.statut },
      { new: true }
    );
    res.json(candidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;