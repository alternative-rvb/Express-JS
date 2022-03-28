"use strict";
/* eslint-env node, es6 */

const fs = require("fs");
const {join} = require("path");

const ENCODING = {encoding: "utf8"};
const PATH = "./layouts";

const lireFichierHtml = (fileName) =>
  fs.promises.readFile(join(PATH, fileName), ENCODING);

module.exports = async (nomPage) => {
  try {
    // Assemblage des fichiers
    // REVIEW

    const [BASE_OF_HTML, TITLE_HTML, CONTENT_HTML] = await Promise.all([
      lireFichierHtml(`baseof.html`),
      lireFichierHtml(`${nomPage}.title.html`),
      lireFichierHtml(`${nomPage}.content.html`),
    ]);

    // Retourner les données
    const HTML = BASE_OF_HTML.replaceAll("{{TITLE}}", TITLE_HTML).replace(
      "{{CONTENT}}",
      CONTENT_HTML
    );

    return HTML;
  } catch (error) {
    console.log(error);
  }
};
