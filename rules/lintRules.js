const maxObj = {
    MAX_DEPTH: 10,
    MAX_DEPTH_FUNCTION: 10,
    MAX_PARAMS: 7,
    MAX_LINE: 1000,
    MAX_CODE_PERlINE: 180,
    MAX_LINES_PERFUNCTION: 200
}
const lintRules = {
  "for-direction": "error",
  "no-var": "error",
  "prefer-const": "error",
  "no-shadow-restricted-names": "error",
  "no-global-assign": "error",
  "no-extra-boolean-cast": "error",
  "no-empty-pattern": "error",
  "no-duplicate-case": "error",
  "no-dupe-else-if": "error",
  "no-constant-condition": "error",
  "no-cond-assign": "error",
  "no-class-assign": "error",
  "no-debugger": "error",
  "eqeqeq": ["error", "always", { null: "ignore" }],
  "no-return-assign": "error",
  "max-lines": ["error", maxObj.MAX_LINE],
  "max-len": [
    "error",
    {
      code: maxObj.MAX_CODE_PERlINE,
      tabWidth: 2,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
      ignorePattern: "^\\s*import",
    },
  ],
  "no-unneeded-ternary": "error",
  "no-eval": "error",
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  "no-use-before-define": [
    "error",
    {
      variables: true,
      functions: true,
      classes: true,
    },
  ],
  "max-lines-per-function": ["error", { max: maxObj.MAX_LINES_PERFUNCTION }],
  "no-useless-catch": "warn",
  "no-unsafe-optional-chaining": "warn",
  "no-self-assign": "warn",
  "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
  "default-case": "warn",
  "no-alert": "warn",
  "no-console": "warn",
  "no-duplicate-imports": "warn",
  "max-depth": ["warn", maxObj.MAX_DEPTH],
  "max-params": ["warn", maxObj.MAX_PARAMS],

  "default-case-last": "warn",
  "require-yield": "off",
  "no-async-promise-executor": "off",
  "no-control-regex": "off",
  "no-useless-escape": "off",
  "no-with": "off",
  "no-unused-labels": "off",
  "no-regex-spaces": "off",
  "no-octal": "off",
  "no-nonoctal-decimal-escape": "off",
  "no-empty": "off",
  "no-delete-var": "off",
  "no-case-declarations": "off",
  "use-isnan": "off",
  "no-useless-backreference": "off",
  "no-unsafe-finally": "off",
  "no-unexpected-multiline": "off",
  "no-sparse-arrays": "off",
  "no-prototype-builtins": "off",
  "no-misleading-character-class": "off",
  "no-irregular-whitespace": "off",
  "no-invalid-regexp": "off",
  "no-inner-declarations": "off",
  "no-fallthrough": "off",
  "no-ex-assign": "off",
  "no-empty-character-class": "off",
  "no-compare-neg-zero": "off",
};
export {lintRules}