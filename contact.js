// Gère l'effet active dans la nav
const links = document.querySelectorAll('nav a');
const currentPage = location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Pop-up à l'envoi du formulaire
document.getElementById("form-contact").addEventListener("submit", function(e) {
  e.preventDefault();

  // Reset le formulaire (simule un envoi)
  this.reset();

  // Affiche la pop-up
  document.getElementById("popup").style.display = "flex";
});

// Ferme la pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
