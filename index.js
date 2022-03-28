"use strict";
/* eslint-env node, es6 */

//ANCHOR Importer le module express
const express = require("express");
// ANCHOR
const url = require("url");

const PORT = 8080;

// Créer une instance de express
const app = express();

// Importer la logique de la page d'accueil
const genererPage = require("./app/get-page.js");

// Ecouter la méthode GET et la route "/"
app.get("/", async (req, res) => {
  // Récuperer le contenu de la page d'accueil
  const homePage = await genererPage('home');
  // Retourner le contenu
  res.send(homePage);
});
// Ecouter la méthode GET et la route "/contact"
app.get("/contact", async (req, res) => {
  // Récuperer le contenu de la page d'accueil
  const contactPage = await genererPage('contact');
  // Retourner le contenu
  res.send(contactPage);
});

// Ecouter les requêtes du repertoire statics
// Retourner les fichiers du dossier statics
app.use("/statics", express.static("statics"));

// Démarer le serveur et écouter un port
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log(`Server is running on port  http://localhost:${PORT}`);
  }
});
