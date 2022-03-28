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
  const BASE_OF_HTML = await lireFichierHtml("/baseof.html");
  const TITLE_HTML = await lireFichierHtml("/home.title.html");
  const CONTENT_HTML = await lireFichierHtml("/home.content.html");

  // Retourner les données
  const HOME = BASE_OF_HTML.replaceAll("{{TITLE}}", TITLE_HTML).replace(
    "{{CONTENT}}",
    CONTENT_HTML
  );

  return HOME;
};
