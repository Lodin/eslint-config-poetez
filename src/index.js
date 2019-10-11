module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/best-practices',
    './rules/es6',
    './rules/node',
    './rules/possible-errors',
    './rules/stylistic-issues',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // sourceType is "module"
    'strict': 'off',
  },
};
