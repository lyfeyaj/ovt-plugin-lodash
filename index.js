'use strict';

module.exports = function(ovt) {
  [
    'array',
    'number',
    'object',
    'string'
  ].forEach(function(type) {
    ovt.plugin(require(`./lib/${type}`));
  });
};
