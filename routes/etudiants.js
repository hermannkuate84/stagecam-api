const express = require('express');
const router = express.Router();
const Etudiant = require('../models/Etudiant');

router.get('/', async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const etudiant = new Etudiant(req.body);
    const nouveau = await etudiant.save();
    res.status(201).json(nouveau);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Etudiant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Etudiant supprime' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;