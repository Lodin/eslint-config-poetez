const checkRules = (
  setName,
  modernRules,
  existingRules,
  deprecatedRules = [],
) => {
  const currentMissingRules = [];
  const currentWrongSetRules = [];
  const currentDeprecatedRules = [];

  for (const rule of modernRules) {
    if (!(rule in existingRules)) {
      currentMissingRules.push(rule);
    }
  }

  for (const rule in existingRules) {
    if (!modernRules.includes(rule)) {
      currentWrongSetRules.push(rule);
    }
  }

  for (const ruleAndReplacement of deprecatedRules) {
    const [rule] = ruleAndReplacement;

    if (rule in existingRules) {
      currentDeprecatedRules.push(ruleAndReplacement);
    }
  }

  const hasMissingRules = currentMissingRules.length > 0;
  const hasWrongSetRules = currentWrongSetRules.length > 0;
  const hasDeprecatedRules = currentDeprecatedRules.length > 0;

  if (hasMissingRules || hasWrongSetRules || hasDeprecatedRules) {
    const missingRulesMessage = hasMissingRules
      ? `MISSING RULES:\n${currentMissingRules
          .map((name) => `\t${name}`)
          .join('\n')}\n`
      : '';

    const wrongSetRulesMessage = hasWrongSetRules
      ? `RULES FROM THE WRONG SET:\n${currentWrongSetRules
          .map((name) => `\t${name}`)
          .join('\n')}\n`
      : '';

    const deprecationMessage = hasDeprecatedRules
      ? `DEPRECATED RULES:\n${currentDeprecatedRules
          .map(
            ([rule, replacement]) => `\t${rule} || REPLACEMENT: ${replacement}`,
          )
          .join('\n')}\n`
      : '';

    console.log(
      `SET: ${setName};\n${missingRulesMessage}${wrongSetRulesMessage}${deprecationMessage}\n\n`,
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

const zip = (arrA, arrB) => {
  const zipped = new Array(arrA.length);

  for (let i = 0, len = zipped.length; i < len; i++) {
    zipped[i] = [arrA[i], arrB[i]];
  }

  return zipped;
};

const showHeader = (title, url) =>
  console.log(
    `=======================\n| ${title.toUpperCase()}\n=======================\n\nURL: ${url}`,
  );

module.exports = {
  checkRules,
  registerNextSiblingFinder,
  showHeader,
  zip,
};
