// Importez le module Express
const express = require("express");

// Créez un nouvel objet Express
const app = express();

// Spécifiez l'emplacement du fichier pixel.js
app.use("/pixel", express.static("./pixel"));

// Définissez le chemin d'accès aux requêtes POST
app.post("/pixel/open", handlePost);

// Démarrez le serveur web
app.listen(3000 );
console.log("serveur open");

// Fonction qui traite les requêtes POST
function handlePost() {
    // Vérifiez que la requête est valide
    if (req.headers["Content-Type"] != "application/json") {
      return "Invalid request";
    }
  
    // Extrayez les données de la requête
    const data = JSON.parse(req.body);
  
    // Enregistrez les données
    console.log("Pixel ouvert : action=%s, email_id=%s, timestamp=%s", data["action"], data["email_id"], data["timestamp"]);
  
    // Envoyez une réponse
    return "OK";
  }

// Fonction qui est appelée lorsque l'image est chargée
function onImageLoad() {
    // Vérifiez que l'image a été chargée
    const img = document.getElementById("pixel");
    if (img.complete) {
      // Envoyez une requête POST à votre serveur web
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://example.com/pixel/open");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({
        action: "open_email",
        email_id: "1234567890",
      }));
    
      // Appelez une fonction qui vous avertit que l'e-mail a été ouvert
      window.alert("L'e-mail a été ouvert !");
    }
  }