const bestPractices = require('./best-practices');
const es6 = require('./es6');
const node = require('./node');
const possibleErrors = require('./possible-errors');
const stylisticIssues = require('./stylistic-issues');
const variables = require('./variables');

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // sourceType is "module"
    "strict": "off",
    ...bestPractices,
    ...es6,
    ...node,
    ...possibleErrors,
    ...stylisticIssues,
    ...variables
  },
};