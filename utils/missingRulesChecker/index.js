const puppeteer = require('puppeteer');
const checkEslint = require('./eslint');
const checkReact = require('./react');
const checkReactA11y = require('./reactA11y');
const checkTypescript = require('./typescript');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await checkEslint(page);
    await checkTypescript(page);
    await checkReact(page);
    await checkReactA11y(page);

    await browser.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
