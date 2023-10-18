const express = require('express');
const router = express.Router();
const fs = require('fs');
const cheminFichier = 'bddzoo.json';

// Lecture du fichier en dehors des routes
let jsonData = null;

fs.readFile(cheminFichier, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier :', err);
    } else {
        jsonData = JSON.parse(data);
    }
});

router.get('/', (req, res, next) => {
    if (jsonData) {
        res.json(jsonData);
    } else {
        res.status(500).json({ error: 'Erreur lors de la lecture du fichier' });
    }
});

router.get('/:catanimal', async (req, res) => {
    const catanimal = req.params.catanimal;

    if (jsonData) {
        if (jsonData[catanimal]) {
            res.json(jsonData[catanimal]);
        } else {
            res.status(404).json({ error: 'Catégorie non trouvée' });
        }
    } else {
        res.status(500).json({ error: 'Erreur lors de la lecture du fichier' });
    }
});

module.exports = router;