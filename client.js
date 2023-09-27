/*function onImageLoad() {
    const img = document.getElementById("pixel");
    if (img.complete) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/pixel/open"); // Utilisez l'URL du serveur
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(
        JSON.stringify({
          action: "open_email",
          email_id: "1234567890",
        })
      );
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          window.alert("L'e-mail a été ouvert !");
        } else {
          window.alert("Une erreur s'est produite.");
        }
      };
    }
  }*/

 // Attendez que le document soit chargé
document.addEventListener("DOMContentLoaded", function () {
    // Trouvez l'élément img
    const img = document.getElementById("pixel");
  
    // Vérifiez si la fonction de notifications est disponible dans le navigateur
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          // Attachez un gestionnaire d'événements load à l'image
          img.addEventListener("load", function () {
            // Créez une requête XMLHttpRequest lorsque l'image est chargée
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:3000/pixel/open");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(
              JSON.stringify({
                action: "open_email",
                email_id: "1234567890",
              })
            );
  
            xhr.onload = function () {
              if (xhr.status === 200) {
                // Affichez une notification lorsque le courrier électronique est ouvert
                new Notification("L'e-mail a été ouvert !");
              } else {
                console.error("Une erreur s'est produite.");
              }
            };
          });
        }
      });
    }
  });