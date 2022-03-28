"use strict";
/* eslint-env node, es6 */

const fs = require("fs");
const {join} = require("path");

const ENCODING = {encoding: "utf8"};
const PATH = "./layouts";

const lireFichierHtml = (file) =>
  fs.promises.readFile(join(PATH, file), ENCODING);

module.exports = async () => {
  // Assemblage des fichiers
  // REVIEW

  const listeResultats = await Promise.all([
    lireFichierHtml("/baseof.html"),
    lireFichierHtml("/home.title.html"),
    lireFichierHtml("/home.content.html"),
  ]);

  const BASE_OF_HTML = listeResultats[0];
  const TITLE_HTML = listeResultats[1];
  const CONTENT_HTML = listeResultats[2];

  // Retourner les données
  const HOME = BASE_OF_HTML.replaceAll("{{TITLE}}", TITLE_HTML).replace(
    "{{CONTENT}}",
    CONTENT_HTML
  );

  return HOME;
};
