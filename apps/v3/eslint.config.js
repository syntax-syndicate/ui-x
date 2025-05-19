import { FlatCompat } from "@eslint/eslintrc"
import prettier from "eslint-plugin-prettier/recommended"
import tailwind from "eslint-plugin-tailwindcss"
import globals from "globals"
import ts from "typescript-eslint"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default ts.config(
  {
    ignores: [
      "node_modules/",
      ".next/*",
      ".contentlayer",
      "src/__registry__",
      "src/scripts/*",
    ],
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  }),
  {
    files: ["src/**/*.{js?(x),ts?(x)}"],
    extends: [...tailwind.configs["flat/recommended"]],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
      },
    },
  },
  prettier
)
