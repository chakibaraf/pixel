// Fonction qui est appelée lorsque l'image est chargée
function onImageLoad() {
    // Créez un objet JSON à envoyer dans la requête POST
    const data = {
        action: "open_email",
        email_id: "1234567890",
    };

    // Créez une instance de XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/pixel/open"); // Assurez-vous d'ajuster l'URL du serveur en conséquence
    xhr.setRequestHeader("Content-Type", "application/json");

    // Gérez la réponse de la requête
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("L'e-mail a été ouvert !");
        } else {
            console.error("Erreur lors de l'envoi de la notification.");
        }
    };

    // Envoyez la requête POST
    xhr.send(JSON.stringify(data));
}