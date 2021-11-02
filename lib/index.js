"use strict";

module.exports = {
  rules: {
    'no-global-window-assign': require('./rules/no-global-window-assign')
  },
  configs: {
    recommended: {
      rules: {
        '@teazn/teazn/no-global-window-assign': ['warn']
      }
    }
  }
};