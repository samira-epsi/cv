// Active la nav
const links = document.querySelectorAll('nav a');
const currentPage = location.pathname.split('/').pop();
links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Gestion de l'envoi avec fetch + pop-up
document.getElementById("form-contact").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById("popup").style.display = "flex";
    } else {
      alert("Erreur d'envoi. Merci de réessayer.");
    }
  })
  .catch(error => {
    alert("Erreur réseau. Merci de réessayer.");
    console.error(error);
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
