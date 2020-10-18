module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {},
        },
    },
    extends: [
		"airbnb",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    rules: {
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: ["**/test.tsx", "**/test.ts"] },
        ],
        "quotes": ["error", "double"],
        "@typescript-eslint/indent": ["error", 4],
        "sort-imports": "error",
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "react/jsx-wrap-multilines": ["none"]
    },
};
