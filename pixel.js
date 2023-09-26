// Fonction qui est appelée lorsque l'image est chargée
function onImageLoad() {
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