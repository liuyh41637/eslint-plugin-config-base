const prettierRules = {
    "prettier/prettier": [
        'error',
        {
            singleQuote: true,
            semi: true,
            printWidth: 180,
            tabWidth: 2,
            trailingComma: 'es5',
            bracketSameLine: false,
            jsxBracketSameLine: true,
            jsxSingleQuote: true,
            arrowParens: 'avoid',
            htmlWhitespaceSensitivity:'ignore',
            endOfLine: 'auto',
            vueIndentScriptAndStyle: true
        }
    ]
}
export { prettierRules };