// Fonction qui traite les requêtes POST
function handlePost() {
    // Vérifiez que la requête est valide
    if (req.headers["Content-Type"] != "application/json") {
      return "Invalid request";
    }
  
    // Extrayez les données de la requête
    const data = JSON.parse(req.body);
  
    // Enregistrez les données
    console.log("Pixel ouvert : action=%s, email_id=%s", data["action"], data["email_id"]);
  
    // Envoyez une réponse
    return "OK";
  }
  
  // Démarrez le serveur web
  app.post("/pixel/open", handlePost);