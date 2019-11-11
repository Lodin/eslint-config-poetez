module.exports = {
  extends: ['./react', './rules/typescript', './rules/typescript-react'].map(
    require.resolve,
  ),
  rules: {},
};
