module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:ngrx/recommended'
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        createDefaultProgram: true,
      },
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        'max-len': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/lines-between-class-members': ["error", "always", { "exceptAfterOverload": true }],
        "@typescript-eslint/no-var-requires": 'off',
        '@typescript-eslint/lines-between-class-members': 'off'
      },
    },
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
    },
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.app.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'import', 'unused-imports', '@typescript-eslint', '@angular-eslint', "ngrx"],
  rules: {
    'ngrx/select-style': 'error',
    'ngrx/prefer-action-creator-in-dispatch': 'off'
  }
};
