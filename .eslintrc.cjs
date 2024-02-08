module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": 'off',
        "@typescript-eslint/strict-boolean-expressions": 'off',
        "react/display-name": 'off',
        "@typescript-eslint/no-misused-promises": 'off',
        "@typescript-eslint/restrict-template-expressions": 'off',
        " @typescript-eslint/no-non-null-assertion": 'off',
        "@typescript-eslint/no-base-to-string": "off",
        "react/prop-types": 'off',
        "@typescript-eslint/no-confusing-void-expression": 'off',
        "@typescript-eslint/triple-slash-reference": 'off',
        "@typescript-eslint/consistent-type-imports": 'off',
        "no-return-assign": 'off',
        "@typescript-eslint/prefer-nullish-coalescing": 'off',
        "@typescript-eslint/explicit-function-return-type": 'off'
    }
}
