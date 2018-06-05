module.exports = {
  "callback-return": "error",
  "global-require": "error",
  "handle-callback-err": "error",
  "no-buffer-constructor": "error",
  "no-mixed-requires": ["error", {grouping: true, allowCall: true}],
  "no-new-require": "error",
  "no-path-concat": "error",
  // it"s common practice in community to use process.env
  "no-process-env": "off",
  "no-process-exit": "error",
  // there is no restricted modules by default
  "no-restricted-modules": "off",
  "no-sync": "error",
};