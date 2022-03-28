"use strict";
/* eslint-env node, es6 */

const fs = require("fs");

const ENCODING = {encoding: "utf8"};
const TEMPLATE_PATH = "./layouts/baseof.html";
const HOME_TITLE_PATH = "./layouts/home.title.html";
const HOME_CONTENT_PATH = "./layouts/home.content.html";

module.exports = async () => {
  // Assemblage des fichiers
  // REVIEW
  const BASE_OF_HTML = await fs.promises.readFile(TEMPLATE_PATH, ENCODING);
  const TITLE_HTML = await fs.promises.readFile(HOME_TITLE_PATH, ENCODING);
  const CONTENT_HTML = await fs.promises.readFile(HOME_CONTENT_PATH, ENCODING);

  // Retourner les données
  const HOME = BASE_OF_HTML
  .replaceAll('{{TITLE}}', TITLE_HTML)
  .replace('{{CONTENT}}', CONTENT_HTML)

  return HOME;
};
