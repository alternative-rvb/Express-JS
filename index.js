'use strict';
/* eslint-env node, es6 */

//ANCHOR Importer le module express
const express = require("express");
// ANCHOR
const url = require("url");

const PORT = 8080;

// Créer une instance de express
const app = express();

// Importer la logique de la page d'accueil
const genererPageAccueil = require("./app/index-get.js");

// Démarer le serveur et écouter un port
app.get('/', async (req, res) => {
  // Récuperer le contenu de la page d'accueil
  const contenu = await genererPageAccueil();
  // Retourner le contenu
  res.send(contenu);
  
});

// Ecouter les requêtes du repertoire statics
// Retourner les fichiers du dossier statics
app.use('/statics',express.static('statics'));

// Ecouter la méthode GET et la route "/"
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log(`Server is running on port  http://localhost:${PORT}`);
  }
});
