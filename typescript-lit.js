module.exports = {
  extends: ['./typescript', './rules/lit'].map(require.resolve),
  rules: {},
};