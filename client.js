/*function onImageLoad() {
    const img = document.getElementById("pixel");
    if (img.complete) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/pixel/open"); // Utilisez l'URL du serveur
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(
        JSON.stringify({
          action: "open_email",
          email_id:  "1234567890",
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
  
    // Vérifiez si   la fonction de notifications est disponible dans le navigateur
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission  === "granted") {
          // Ajoutez un gestionnaire d'événements  load à l'image
          img.addEventListener("load", function () {
            // Effectuez une demande GET vers le serveur   pour   enregistrer l'ouverture de l'e-mail
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:3000/pixel/open"); //Utilisez  l'URL de suivi sur le serveur
            xhr.send();
  
            // Envoyez une  notification  lorsque l'e-mail  est ouvert
            new Notification("L'e-mail a été ouvert !");
            // Affichez également une alerte
          alert("L'e-mail a été ouvert !");

          
          });
        }
      });
    }
  });