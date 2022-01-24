module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: ["@typescript-eslint", "jsdoc", "prettier"],
  extends: [
    "google",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "valid-jsdoc": "off",
    "require-jsdoc": "off",
    "jsdoc/require-jsdoc": [
      "warn",
      {
        contexts: [
          { context: "ClassDeclaration", inlineCommentBlock: true },
          { context: "ClassProperty", inlineCommentBlock: true },
          { context: "PropertyDefinition", inlineCommentBlock: true },
          { context: "FunctionDeclaration", inlineCommentBlock: true },
          { context: "MethodDefinition", inlineCommentBlock: true },
          { context: "TSPropertySignature", inlineCommentBlock: true },
        ],
      },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/member-ordering": "warn",
    "no-console": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    jsdoc: {
      mode: "typescript",
    },
  },
};
