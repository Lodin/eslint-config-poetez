const reactA11y = require('../../rules/react-a11y');
const {checkRules, registerNextSiblingFinder, showHeader} = require('./utils');

const url = 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y';

module.exports = async (page) => {
  showHeader('React A11y', url);
  await page.goto(url);

  await registerNextSiblingFinder(page);

  const rulesList = await page.evaluate(() => {
    const list = window.findNextSibling(
      document.querySelector('#user-content-supported-rules').closest('h2'),
      'ul',
    );

    return Array.from(
      list.querySelectorAll('li > a'),
      ({textContent}) => `jsx-a11y/${textContent}`,
    );
  });

  checkRules('reactA11y', rulesList, reactA11y.rules);
};
