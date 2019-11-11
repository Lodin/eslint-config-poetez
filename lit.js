module.exports = {
  extends: ['./index', './rules/lit'].map(require.resolve),
  rules: {},
};