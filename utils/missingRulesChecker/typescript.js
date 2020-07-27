const typescript = require('../../rules/typescript');
const {checkRules, registerNextSiblingFinder, showHeader} = require('./utils');

const url =
  'https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin';

module.exports = async (page) => {
  showHeader('@typescript-eslint', url);
  await page.goto(url);

  await registerNextSiblingFinder(page);

  const [supportedRules, extensionRules] = await page.evaluate(async () => {
    const extractRules = (id, heading) => {
      const table = window.findNextSibling(
        document.querySelector(id).closest(heading),
        'table',
      );

      return Array.from(
        table.querySelectorAll('td:first-child'),
        ({textContent}) => textContent,
      );
    };

    const supportedRules = extractRules('#user-content-supported-rules', 'h2');
    const extensionRules = extractRules('#user-content-extension-rules', 'h3');

    return [supportedRules, extensionRules];
  });

  checkRules('typescript', [...supportedRules, ...extensionRules], {
    ...typescript.rules,
    ...Object.assign({}, ...typescript.overrides.map(({rules}) => rules)),
  });
};
