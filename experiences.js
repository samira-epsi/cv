const points = document.querySelectorAll('.timeline-point');
const sections = document.querySelectorAll('.details');

points.forEach(point => {
  point.addEventListener('click', () => {
    const targetId = point.dataset.target;

    // Retire la classe active de tous les points + sections
    points.forEach(p => p.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Ajoute la classe active au bon point + à la bonne section
    point.classList.add('active');
    document.getElementById(targetId).classList.add('active');
  });
});

