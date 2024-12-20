const requireParserServicesRules = {
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/no-unnecessary-condition": [
    "error",
    {
      allowConstantLoopConditions: true,
    },
  ],
};
export {requireParserServicesRules};