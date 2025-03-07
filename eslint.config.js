import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {
    languageOptions: {
       globals: globals.browser,
       parserOptions: {
        proyect: "./tsconfig-app.json",
        }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
    ...pluginJs.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": ["warn"],
    "@typescript-eslint/no-explicit-any": ["warn"]
  },
}
];


//////////////////////////////
// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// import pluginHooks from "eslint-plugin-react-hooks";
// import pluginA11y from "eslint-plugin-jsx-a11y";
// import prettier from "eslint-plugin-prettier";

// /** @type {import('eslint').Linter.FlatConfig[]} */
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
//     languageOptions: {
//       globals: globals.browser,
//       parser: tseslint.parser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module"
//       }
//     },
//     plugins: {
//       react: pluginReact,
//       "@typescript-eslint": tseslint,
//       "react-hooks": pluginHooks,
//       "jsx-a11y": pluginA11y,
//       prettier
//     },
//     rules: {
//       ...pluginJs.configs.recommended.rules,
//       ...tseslint.configs.recommended.rules,
//       ...pluginReact.configs.recommended.rules,
//       ...pluginHooks.configs.recommended.rules,
//       ...pluginA11y.configs.recommended.rules,
//       "react/react-in-jsx-scope": "off",
//       "@typescript-eslint/no-unused-vars": "warn",
//       "react/prop-types": "off",
//       "prettier/prettier": "error",
//       "@typescript-eslint/explicit-function-return-type": ["warn"],
//       "@typescript-eslint/no-explicit-any": ["warn"]
//     },
//     settings: {
//       react: {
//         version: "detect"
//       }
//     }
//   }
// ];
