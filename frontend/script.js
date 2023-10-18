document.addEventListener('DOMContentLoaded', () => {
    const animalContainer = document.getElementById('animalButtons');
  
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                const animalName = key;
                const a = document.createElement('a');
                a.textContent = animalName;
                a.addEventListener('click', () => {
                    console.log(animalName);
                    displayAnimalDetails(animalName, data[key]);
                });
                animalContainer.appendChild(a);
            }
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
    });
  
    function displayAnimalDetails(animalName, animalData) {
        const animalDetails = document.getElementById('animalDetails');
        // Utilisez animalName et animalData pour afficher les détails de l'animal
        animalDetails.innerHTML = `Nom de l'animal : ${animalName}, Données de l'animal : ${JSON.stringify(animalData)}`;
    }
});
