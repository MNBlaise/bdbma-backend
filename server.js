const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Route racine (test)
app.get('/', (req, res) => {
  res.send("✅ BDBMA Backend est en ligne ! Prêt à recevoir les agents.");
});

// ROUTE IMPORTANTE : Login via /api/login
app.post('/api/login', (req, res) => {
  const { province, name, password } = req.body;

  // Simule une authentification (à remplacer plus tard par MongoDB)
  if (province === "Kinshasa" && name === "Admin BDBMA" && password === "admin123") {
    res.json({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      message: "Connexion réussie !"
    });
  } else {
    res.status(401).json({ error: "Identifiants incorrects" });
  }
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});