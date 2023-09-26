const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/pixel", express.static("./pixel"));

app.post("/pixel/open", (req, res) => {
    // Vérifiez que la requête est valide
    if (req.headers["content-type"] !== "application/json") {
        res.status(400).send("Invalid request");
        return;
    }

    // Extrayez les données de la requête
    const data = req.body;

    // Enregistrez les données
    console.log("Pixel ouvert : action=%s, email_id=%s", data["action"], data["email_id"]);

    // Envoyez une réponse
    res.status(200).send("OK");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'écoute sur le port ${port}`);
});