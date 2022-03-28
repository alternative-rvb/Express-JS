"use strict";
/* eslint-env node, es6 */

const fs = require("fs");
const {join} = require("path");

const parser = require("@deskeen/markdown");

const ENCODING = {encoding: "utf8"};
const PATH = "./layouts";
const ARTICLE_PATH = "./content/blog";

const lireFichierHtml = (fileName) =>
  fs.promises.readFile(join(PATH, fileName), ENCODING);

const lireFichierMd = (artNumber) =>
  fs.promises.readFile(join(ARTICLE_PATH, `${artNumber}.md`), ENCODING);

module.exports = async (artNumber) => {
  let HTML = "";
  try {
    // Récupérer le contenu MarkDown correspondant au numéro de l'article
    // Retourner les données
    const MARKDOWN = await lireFichierMd(artNumber);

    // Convertir le MarkDown en HTML

    const mdToHtml = parser.parse(MARKDOWN).innerHTML;

    // Récupérer le contenu HTML du modele et des éléments de la page
    const BASE_OF_HTML = await lireFichierHtml("baseof.html");

    // Retourner les données
    // FIXME
    HTML = BASE_OF_HTML.replaceAll("{{TITLE}}", "").replace(
      "{{CONTENT}}",
      mdToHtml
    );

    return HTML;
  } catch (error) {
    console.log(error);
  }
};
