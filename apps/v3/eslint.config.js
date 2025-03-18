import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import next from "@next/eslint-plugin-next"
import prettier from "eslint-plugin-prettier/recommended"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import tailwind from "eslint-plugin-tailwindcss"
import globals from "globals"
import ts from "typescript-eslint"

const compat = new FlatCompat()

export default ts.config(
  {
    ignores: ["node_modules/", ".next/*", ".contentlayer", "src/__registry__"],
  },
  {
    files: ["src/**/*.{js?(x),ts?(x)}"],
    extends: [js.configs.recommended, ...ts.configs.recommended],
  },
  {
    files: ["src/**/*.{js?(x),ts?(x)}"],
    extends: [
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      ...fixupConfigRules(compat.config(reactHooks.configs.recommended)),
      ...fixupConfigRules(compat.config(next.configs["core-web-vitals"])),
    ],
    rules: {
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
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
