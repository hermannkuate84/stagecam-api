require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connecte !'))
  .catch(err => console.log('Erreur:', err));

app.use('/etudiants', require('./routes/etudiants'));
app.use('/offres', require('./routes/offres'));
app.use('/candidatures', require('./routes/candidatures'));

app.get('/', (req, res) => {
  res.json({ message: 'StageCam API fonctionne !' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Serveur demarre sur port ' + PORT));