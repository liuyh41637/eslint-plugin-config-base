const sonarRules = {
  "sonarjs/no-all-duplicated-branches": "error",
  "sonarjs/no-duplicated-branches": "error",
  "sonarjs/no-identical-conditions": "error",
  "sonarjs/no-identical-functions": "error",
  "sonarjs/non-existent-operator": "error",
  "sonarjs/no-duplicate-string": ["warn", {"threshold": 3}],
  "sonarjs/prefer-immediate-return": "warn",
  "sonarjs/prefer-single-boolean-return": "warn",
  "sonarjs/no-redundant-boolean": "warn",
  "sonarjs/no-inverted-boolean-check": "warn",
  "sonarjs/no-element-overwrite": "off",
  "sonarjs/no-extra-arguments": "off",
  "sonarjs/no-redundant-jump": "off",
  "sonarjs/prefer-object-literal": "off",
  "sonarjs/prefer-while": "off",
  "sonarjs/cognitive-complexity": "off",
  "sonarjs/max-switch-cases": "off",
  "sonarjs/no-collapsible-if": "off",
  "sonarjs/no-small-switch": "off",
  "sonarjs/no-nested-switch": "off",
  "sonarjs/no-empty-collection": "off",
  "sonarjs/no-ignored-return": "off",
  "sonarjs/no-nested-template-literals": "off",
  "sonarjs/no-one-iteration": "off",
  "sonarjs/no-same-line-conditional": "off",
  "sonarjs/no-collection-size-mischeck": "off",
  "sonarjs/no-gratuitous-expressions": "off",
  "sonarjs/no-use-of-empty-return-value": "off"
}
export {
  sonarRules
}