import path from "node:path";
import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["vendor/**"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    files: ["vite.config.js"],
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      "no-console": "error",
    },
  },
];
