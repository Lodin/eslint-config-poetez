const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // handled by "no-var" rule
    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    // handled by "no-labels" rule
    'no-label-var': 'off',
    'no-restricted-globals': [
      'error',
      'isFinite',
      'isNaN',
      ...confusingBrowserGlobals,
    ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    // undefined is useful
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
  },
};
