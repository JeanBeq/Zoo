const { Console } = require('console');
var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET home page. */
const cheminFichier = 'bddzoo.json';
fs.readFile(cheminFichier, 'utf8', (err, data) => {

    router.get('/', function(req, res, next) {
    
        if (err) {
          res.send('Erreur lors de la lecture du fichier :');
          return;
        }
      
        // Analyser les données JSON
        try {
          const jsonData = JSON.parse(data);
          res.json(data);
        } catch (parseError) {
          console.error('Erreur lors de lanalyse JSON :', parseError);
        }
    
    });
    
    router.get('/:catanimal', async (req, res) => {
        const catanimal = req.params.catanimal;
        


        if (err) {
            res.send('Erreur lors de la lecture du fichier :', err);
            return;
          }
        
          // Analyser les données JSON
          try {
            const animalcatData = JSON.parse(data);
            
            res.json(animalcatData[catanimal]);
          } catch (parseError) {
            res.send('Erreur lors de lanalyse JSON :', parseError);
          }
      });

    });

    module.exports = router;
