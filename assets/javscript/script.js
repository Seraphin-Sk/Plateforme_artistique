document.getElementById('submission-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const artistName = document.getElementById('artistName').value;
    const workTitle = document.getElementById('workTitle').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];

    if (artistName && workTitle && description && file) {
        alert(`Merci ${artistName}, votre œuvre "${workTitle}" a été soumise avec succès !`);
        // Reset form fields
        document.getElementById('submission-form').reset();
    } else {
        alert("Veuillez remplir tous les champs avant de soumettre.");
    }
});

// Observer pour déclencher les animations sur les titres et les images
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.5 // L'animation se déclenche lorsque 50% de l'élément est visible
});

// Sélectionner les titres et les images pour l'animation
const titles = document.querySelectorAll('h1, h2');
const images = document.querySelectorAll('.card-img-top');

// Appliquer l'observateur à chaque titre et image
titles.forEach(title => observer.observe(title));
images.forEach(image => observer.observe(image));




