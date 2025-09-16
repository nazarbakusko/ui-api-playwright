// eslint.config.mjs
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  // Config for JS files
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "semi": ["error", "always"],                
      "quotes": ["error", "single"],             
      "indent": ["error", 2],                     
      "no-trailing-spaces": "error",              
      "space-before-blocks": "error",             
      "keyword-spacing": "error",                  
      "space-in-parens": ["error", "never"],       
      "no-multi-spaces": "error",                
      "camelcase": ["warn", { "properties": "always" }], 
      "no-unused-vars": ["warn", { "args": "none", "ignoreRestSiblings": true }],
      "no-undef": "error"
    },
  },

  // Config for TS files
  {
    files: ["src/**/*.{ts,mts,cts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,      
      "semi": ["error", "always"],                 
      "quotes": ["error", "single"],               
      "indent": ["error", 2],                      
      "no-trailing-spaces": "error",               
      "space-before-blocks": "error",              
      "keyword-spacing": "error",                  
      "space-in-parens": ["error", "never"],       
      "no-multi-spaces": "error",                  
      "camelcase": ["warn", { "properties": "always" }],
    },
  },
];
