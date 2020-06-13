const bestPractices = require('../../rules/best-practices');
const es6 = require('../../rules/es6');
const possibleErrors = require('../../rules/possible-errors');
const strict = require('../../rules/strict');
const stylisticIssues = require('../../rules/stylistic-issues');
const variables = require('../../rules/variables');
const {checkDeprecated, checkRules, showHeader} = require('./utils');

const ruleListNames = [
  'best-practices',
  'ecmascript-6',
  'possible-errors',
  'strict-mode',
  'stylistic-issues',
  'variables',
];

const deprecatedRuleNameList = ['deprecated', 'removed'];

const extractTextContent = async (page, selector) =>
  page.$$eval(selector, (nodes) => nodes.map((node) => node.textContent));

module.exports = async (page) => {
  showHeader('eslint');
  await page.goto('https://eslint.org/docs/rules/');

  const [
    bestPracticesLoadedSet,
    es6LoadedSet,
    possibleErrorsLoadedSet,
    strictLoadedSet,
    stylisticIssuesLoadedSet,
    variablesLoadedSet,
  ] = await Promise.all(
    ruleListNames.map(
      async (name) =>
        await extractTextContent(
          page,
          `#${name} ~ .rule-list tr > td:nth-child(3)`,
        ),
    ),
  );

  checkRules('bestPractices', bestPracticesLoadedSet, bestPractices.rules);
  checkRules('es6', es6LoadedSet, es6.rules);
  checkRules('possibleErrors', possibleErrorsLoadedSet, possibleErrors.rules);
  checkRules('strict', strictLoadedSet, strict.rules);
  checkRules(
    'stylisticIssues',
    stylisticIssuesLoadedSet,
    stylisticIssues.rules,
  );
  checkRules('variables', variablesLoadedSet, variables.rules);

  const [deprecatedLoadedSet, removedLoadedSet] = await Promise.all(
    deprecatedRuleNameList.map(
      async (name) =>
        await Promise.all([
          extractTextContent(page, `#${name} ~ .rule-list tr > td:first-child`),
          extractTextContent(page, `#${name} ~ .rule-list tr > td:last-child`),
        ]),
    ),
  );

  const commonDeprecations = [...deprecatedLoadedSet, ...removedLoadedSet];

  checkDeprecated('bestPractices', commonDeprecations, bestPractices.rules);
  checkDeprecated('es6', commonDeprecations, es6.rules);
  checkDeprecated('possibleErrors', commonDeprecations, possibleErrors.rules);
  checkDeprecated('strict', commonDeprecations, strict.rules);
  checkDeprecated('stylisticIssues', commonDeprecations, stylisticIssues.rules);
  checkDeprecated('variables', commonDeprecations, variables.rules);
};
