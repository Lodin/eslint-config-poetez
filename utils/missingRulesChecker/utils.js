const checkDeprecated = (setName, loadedSet, setToCheck) => {
  const deprecations = [];

  for (const ruleAndReplacement of loadedSet) {
    const [rule] = ruleAndReplacement;

    if (rule in setToCheck) {
      deprecations.push(ruleAndReplacement);
    }
  }

  if (deprecations.length > 0) {
    console.log(
      `SET: ${setName};\nDEPRECATED RULES:\n${deprecations
        .map(
          ([rule, replacement]) => `\t${rule} || REPLACEMENT: ${replacement}`,
        )
        .join('\n')}\n\n`,
    );
  }
};

const checkRules = (setName, loadedSet, setToCheck) => {
  const missings = [];

  for (const rule of loadedSet) {
    if (!(rule in setToCheck)) {
      missings.push(rule);
    }
  }

  if (missings.length > 0) {
    console.log(
      `SET: ${setName};\nMISSING RULES:\n${missings
        .map((name) => `\t${name}`)
        .join('\n')}\n\n`,
    );
  }
};

const registerNextSiblingFinder = async (page) => {
  await page.evaluate(() => {
    window.findNextSibling = (element, selector) => {
      let sibling = element.nextElementSibling;

      while (sibling) {
        if (sibling.matches(selector)) {
          return sibling;
        }

        sibling = sibling.nextElementSibling;
      }
    };
  });
};

const showHeader = (title) =>
  console.log(
    `=======================\n| ${title.toUpperCase()}\n=======================\n\n`,
  );

module.exports = {
  checkDeprecated,
  checkRules,
  registerNextSiblingFinder,
  showHeader,
};
