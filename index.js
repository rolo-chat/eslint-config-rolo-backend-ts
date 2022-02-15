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
          { context: "TSInterfaceDeclaration", inlineCommentBlock: true },
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
    "no-param-reassign": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "no-return-await": "warn",
    "@typescript-eslint/no-confusing-void-expression": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/array-type": ["warn", { default: "generic" }],
    "@typescript-eslint/promise-function-async": ["warn"],
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
