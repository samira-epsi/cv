// Active le lien actif dans le menu
const links = document.querySelectorAll('nav a');
const currentPage = location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Effet d’écriture uniquement sur la citation
const line1 = "Je n’ai jamais su choisir entre comprendre les systèmes et comprendre les gens.";
const line2 = "Alors j’ai décidé de faire les deux.";

let i1 = 0;
let i2 = 0;
const speed = 30;

function typeFirstLine() {
  if (i1 < line1.length) {
    document.getElementById("typed-line-1").textContent += line1.charAt(i1);
    i1++;
    setTimeout(typeFirstLine, speed);
  } else {
    setTimeout(typeSecondLine, 400);
  }
}

function typeSecondLine() {
  if (i2 < line2.length) {
    document.getElementById("typed-line-2").textContent += line2.charAt(i2);
    i2++;
    setTimeout(typeSecondLine, speed);
  }
}

window.onload = typeFirstLine;





function closePopup() {
  document.getElementById('popupBackdrop').style.display = 'none';
  localStorage.setItem('popupShown', 'true'); // On note que la popup a été vue
}

window.addEventListener('load', () => {
  const alreadySeen = localStorage.getItem('popupShown');
  if (!alreadySeen) {
    setTimeout(() => {
      document.getElementById('popupBackdrop').style.display = 'flex';
    }, 5000);
  }
});




