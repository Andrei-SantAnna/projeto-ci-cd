export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
      "semi": ["error", "always"],
    },
  },
];
