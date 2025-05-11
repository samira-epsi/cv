document.getElementById("form-contact").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch("https://formsubmit.co/gsamirabourgi@gmail.com", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById("popup").style.display = "flex";
    } else {
      alert("Erreur lors de l'envoi. Réessaie plus tard.");
    }
  })
  .catch(error => {
    alert("Erreur de connexion. Réessaie plus tard.");
    console.error(error);
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
