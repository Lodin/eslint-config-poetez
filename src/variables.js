module.exports = {
  // handled by "no-var" rule
  'init-declarations': 'off',
  'no-catch-shadow': 'error',
  'no-delete-var': 'error',
  // handled by "no-labels" rule
  'no-label-var': 'off',
  // no globals to restrict
  'no-restricted-globals': 'off',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  // undefined is useful
  'no-undefined': 'off',
  'no-unused-vars': ['error', {
    args: 'all',
    argsIgnorePattern: '^_[a-zA-Z]*$',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^_[a-zA-Z]*$',
    vars: 'all',
    varsIgnorePattern: '^_[a-zA-Z]*$',
  }],
  'no-use-before-define': 'error',
};
