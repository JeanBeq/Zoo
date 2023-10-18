document.addEventListener('DOMContentLoaded', () => {
    const animalContainer = document.getElementById('animalButtons');
  
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
        data.forEach(animal => {
          const button = document.createElement('button');
          button.textContent = animal.name;
          button.addEventListener('click', () => {
            console.log(animal);
            displayAnimalDetails(animal);
          });
          animalContainer.appendChild(button);
        });
      })
      .catch(error => {
        console.error('Erreur lors de la requête :', error);
      });
  
    function displayAnimalDetails(animal) {
      // Vous pouvez afficher les détails de l'animal dans une autre partie de la page
      const animalDetails = document.getElementById('animalDetails');
      animalDetails.innerHTML = `Nom: ${animal.name}, Espèce: ${animal.species}, Âge: ${animal.age}`;
    }
  });