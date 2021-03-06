module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {before: true, after: false}],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    // no restricted exports by default
    'no-restricted-exports': 'off',
    // no restricted imports by default
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      {allowNamedFunctions: false, allowUnboundThis: false},
    ],
    'prefer-const': ['error', {ignoreReadBeforeAssign: true}],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    // handled by "eslint-plugin-import" rules
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': 'error',
  },
};
