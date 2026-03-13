import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        TimelineLite: "readonly",
        Power4: "readonly",
        ScrollMagic: "readonly",
        TweenMax: "readonly",
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
      },
  { ignores: ["node_modules/**", "*.jpg", "*.mov"] },
];
