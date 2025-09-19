const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB Atlas
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://username:password@cluster0.mongodb.net/bdbma?retryWrites=true&w=majority')
  .then(() => console.log('✅ MongoDB connecté'))
  .catch(err => console.error('❌ Erreur MongoDB:', err));

// Route test
app.get('/', (req, res) => {
  res.json({ message: "BDBMA Backend est en ligne !", version: "v4.0" });
});

// Route d'authentification (exemple)
app.post('/api/login', (req, res) => {
  const { province, name, password } = req.body;
  if (province === "Kinshasa" && name === "Admin BDBMA" && password === "admin123") {
    res.json({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." });
  } else {
    res.status(401).json({ error: "Identifiants incorrects" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});