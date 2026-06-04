import react from "@eslint-plugins/react";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import globals from "globals";
import js from "eslint/globals.js";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  { ...js.configs.recommended },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: { react },
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
