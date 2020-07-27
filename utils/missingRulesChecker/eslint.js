const bestPractices = require('../../rules/best-practices');
const es6 = require('../../rules/es6');
const possibleErrors = require('../../rules/possible-errors');
const strict = require('../../rules/strict');
const stylisticIssues = require('../../rules/stylistic-issues');
const variables = require('../../rules/variables');
const {
  checkRules,
  registerNextSiblingFinder,
  showHeader,
  zip,
} = require('./utils');

const url = 'https://eslint.org/docs/rules/';

const ruleListNames = [
  'best-practices',
  'ecmascript-6',
  'possible-errors',
  'strict-mode',
  'stylistic-issues',
  'variables',
];

const deprecatedRuleNameList = ['deprecated', 'removed'];

module.exports = async (page) => {
  showHeader('eslint', url);
  await page.goto(url);

  await registerNextSiblingFinder(page);

  const [
    bestPracticesLoadedSet,
    es6LoadedSet,
    possibleErrorsLoadedSet,
    strictLoadedSet,
    stylisticIssuesLoadedSet,
    variablesLoadedSet,
  ] = await page.evaluate(
    (ruleListNames) =>
      ruleListNames.map((id) => {
        const table = window.findNextSibling(
          document.querySelector(`#${id}`),
          '.rule-list',
        );

        return Array.from(
          table.querySelectorAll('tr > td:nth-child(3)'),
          ({textContent}) => textContent,
        );
      }),
    ruleListNames,
  );

  const [deprecatedLoadedSet, removedLoadedSet] = await page.evaluate(
    (deprecatedRuleNameList) =>
      deprecatedRuleNameList.map((id) => {
        const table = window.findNextSibling(
          document.querySelector(`#${id}`),
          '.rule-list',
        );

        return [
          Array.from(
            table.querySelectorAll('tr > td:first-child'),
            ({textContent}) => textContent,
          ),
          Array.from(
            table.querySelectorAll('tr > td:last-child'),
            ({textContent}) => textContent,
          ),
        ];
      }),
    deprecatedRuleNameList,
  );

  const commonDeprecations = [
    ...zip(...deprecatedLoadedSet),
    ...zip(...removedLoadedSet),
  ];

  checkRules(
    'bestPractices',
    bestPracticesLoadedSet,
    bestPractices.rules,
    commonDeprecations,
  );
  checkRules('es6', es6LoadedSet, es6.rules, commonDeprecations);
  checkRules(
    'possibleErrors',
    possibleErrorsLoadedSet,
    possibleErrors.rules,
    commonDeprecations,
  );
  checkRules('strict', strictLoadedSet, strict.rules, commonDeprecations);
  checkRules(
    'stylisticIssues',
    stylisticIssuesLoadedSet,
    stylisticIssues.rules,
    commonDeprecations,
  );
  checkRules(
    'variables',
    variablesLoadedSet,
    variables.rules,
    commonDeprecations,
  );
};
