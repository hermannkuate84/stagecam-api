const express = require('express');
const router = express.Router();
const Offre = require('../models/Offre');

router.get('/', async (req, res) => {
  try {
    const offres = await Offre.find();
    res.json(offres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const offre = new Offre(req.body);
    const nouvelle = await offre.save();
    res.status(201).json(nouvelle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Offre.findByIdAndDelete(req.params.id);
    res.json({ message: 'Offre supprimee' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;