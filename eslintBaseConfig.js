import { rules, requireParserServicesRules } from "./rules/index";
import { readConfigFile, getConfigPath } from './util';
const tsConfigPath = getConfigPath()
const tsconfig = readConfigFile()
const includeFiles = tsconfig?.include || []
const files = includeFiles.filter((f) => f.indexOf('.vue') === -1)
const recommendedConfigs = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ...(tsconfig ? { parser: "@typescript-eslint/parser" } : {}),
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "vue",
    "@typescript-eslint",
    "sonarjs",
    "no-useless-assign",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules,
  ...(tsconfig
    ? {
        overrides: [
          {
            files: files,
            parser: "@typescript-eslint/parser",
            parserOptions: {
              ecmaVersion: "latest",
              sourceType: "module",
              ecmaFeatures: {
                jsx: true,
              },
              project: tsConfigPath,
            },
            rules: {
              ...rules,
              ...requireParserServicesRules,
            },
          },
        ],
      }
    : {}),
}
const configs = {
  recommended: recommendedConfigs
}
export { configs };
