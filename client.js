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
  
    // Vérifiez si l'e-mail a déjà été ouvert en consultant le stockage local
    const emailOpened = localStorage.getItem("emailOpened");
  
    // Si l'e-mail n'a pas été ouvert, effectuez la requête POST et enregistrez l'état
    if (!emailOpened) {
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
          window.alert("L'e-mail a été ouvert !");
          // Enregistrez l'état d'ouverture de l'e-mail dans le stockage local
          localStorage.setItem("emailOpened", "true");
        } else {
          window.alert("Une erreur s'est produite.");
        }
      };
    }
  });