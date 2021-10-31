"use strict";

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow assignment to global.window',
      category: 'Possible Problems',
      recommended: true
    }
  },
  create: context => {
    return {
      ExpressionStatement(node) {
        const {
          expression
        } = node;
        const {
          left
        } = expression;

        if (left && left.object && left.object.name === 'global' && left.property && left.property.name === 'window') {
          context.report({
            node,
            message: 'Do not assign to global.window'
          });
        }
      }
    };
  }
};