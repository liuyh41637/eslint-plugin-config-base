const tsRules = {
  "@typescript-eslint/ban-types": "warn",
  "@typescript-eslint/no-extra-non-null-assertion": "warn",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/no-inferrable-types": "warn",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-array-constructor": "off",
  "@typescript-eslint/no-loss-of-precision": "off",
  "@typescript-eslint/no-namespace": "off",
  "@typescript-eslint/no-misused-new": "off",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-this-alias": "off",
  "@typescript-eslint/no-unnecessary-type-constraint": "off",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
  "@typescript-eslint/no-var-required": "off",
  "@typescript-eslint/no-empty-interface": "off",
  "@typescript-eslint/prefer-namespace-keyword": "off",
  "@typescript-eslint/adjacentoverload-signatures": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/triple-slash-reference": "off",
  "@typescript-eslint/consistent-type-assertions": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
};
export {tsRules};