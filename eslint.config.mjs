import eslintPluginAstro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import tsParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
    },
  },
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
    },
  },
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      ".next/**",
      "public/**",
      "coverage/**",
      "build/**",
      "out/**",
      "next-env.d.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
];
