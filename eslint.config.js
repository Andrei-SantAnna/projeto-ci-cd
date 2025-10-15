import { FlatCompat } from "@eslint/eslintrc";

const compat = FlatCompat.fromFile(".eslintrc.json");

export default [
  // importa as regras do antigo .eslintrc.json
  ...compat.extends("eslint:recommended"),
  {
    files: ["*.js"],
    rules: {
      // suas regras personalizadas
      "no-console": "warn",
      "semi": ["error", "always"],
    },
  },
];
