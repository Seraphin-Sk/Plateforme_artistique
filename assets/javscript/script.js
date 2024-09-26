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
