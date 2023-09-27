// Importez le module Express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware pour gérer les en-têtes CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://chakibaraf.github.io");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.use(bodyParser.json());

app.post("/pixel//open", handlePost);

app.listen(port, () => {
  console.log(`Serveur ouvert sur le port ${port}`);
});

function handlePost(req, res) {
  // Vérifiez que la requête est valide
  if (req.headers["content-type"] !== "application/json") {
    return res.status(400).send("Requête invalide");
  }

  // Extrayez les données de la requête
  const data = req.body;

  // Enregistrez les données
  console.log(
    "Pixel ouvert : action=%s, email_id=%s, timestamp=%s",
    data["action"],
    data["email_id"],
    data["timestamp"]
  );

  // Envoyez une réponse
  res.status(200).send("OK");
}

