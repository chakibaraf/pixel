// Importez le module Express
const express = require("express");

// Créez un nouvel objet Express
const app = express();

// Définissez le chemin d'accès aux requêtes POST
app.post("/pixel/open", handlePost);

// Démarrez le serveur web
app.listen(3000);