// ESLint Configuration (Flat Config Format - ESLint v9+)
// This file defines the linting rules for your JavaScript code

module.exports = [
  {
    // Files to lint
    files: ["**/*.js"],

    // Ignore patterns - files/folders ESLint should skip
    ignores: ["node_modules/**", "dist/**", "build/**"],

    // Language options
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        // Node.js global variables
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
      },
    },

    // Linting rules
    rules: {
      // Enforce 2-space indentation
      indent: ["error", 2],

      // Enforce Unix line endings
      "linebreak-style": ["error", "unix"],

      // Enforce double quotes
      quotes: ["error", "double"],

      // Require semicolons
      semi: ["error", "always"],

      // Disallow unused variables
      "no-unused-vars": ["warn"],

      // Disallow console statements (warn only, not error)
      "no-console": "off",

      // Require === instead of ==
      eqeqeq: ["error", "always"],

      // Disallow var, prefer const/let
      "no-var": "error",

      // Prefer const over let when variable is not reassigned
      "prefer-const": "warn",
      
    },
  },
];
