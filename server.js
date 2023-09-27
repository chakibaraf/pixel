/// Importez le module Express
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

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

app.get("/pixel/open", handlePixelOpen); // Changez cette route en GET

app.listen(port, () => {
  console.log(`Serveur ouvert sur le port ${port}`);
});

function handlePixelOpen(req, res) {
  // Obtenez la date et l'heure actuelles
  const timestamp = moment().format();

  // Obtenez l'adresse IP du client
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // Enregistrez les données
  console.log(
    "Pixel ouvert : timestamp=%s, IP=%s",
    timestamp,
    ip
  );

  // Répondez avec une image transparente
  const transparentPixel = Buffer.from(
    "R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
    "base64"
  );
  res.writeHead(200, {
    "Content-Type": "image/gif",
    "Content-Length": transparentPixel.length,
  });
  res.end(transparentPixel);
}