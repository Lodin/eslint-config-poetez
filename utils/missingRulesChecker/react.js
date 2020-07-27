const react = require('../../rules/react');
const {checkRules, registerNextSiblingFinder, showHeader} = require('./utils');

const url = 'https://github.com/yannickcr/eslint-plugin-react';

module.exports = async (page) => {
  showHeader('React', url);
  await page.goto(url);

  await registerNextSiblingFinder(page);

  const [reactLoaded, jsxLoaded] = await page.evaluate(() => {
    const extractRules = (id, heading) =>
      window.findNextSibling(document.querySelector(id).closest(heading), 'ul');

    const reactList = extractRules(
      '#user-content-list-of-supported-rules',
      'h1',
    );
    const jsxList = extractRules('#user-content-jsx-specific-rules', 'h2');

    return [reactList, jsxList].map((list) =>
      Array.from(
        list.querySelectorAll('li > a'),
        ({textContent}) => textContent,
      ),
    );
  });

  checkRules('react', [...reactLoaded, ...jsxLoaded], react.rules);
};
