'use strict';
/* eslint-env node, es6 */

const fs = require('fs');



const ENCODING = {encoding: "utf8"};
const INDEX_PATH = './index.html';

module.exports = async () => {
  // Récuperer le contenu du fichier index.html
  // REVIEW 
  const contenu = await fs.promises.readFile(INDEX_PATH, ENCODING);
  // Retourner les données
  return contenu;
};
