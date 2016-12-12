'use strict';

const _ = require('lodash');

module.exports = function ObjectExtention(ovt) {

  // Methods from `lodash`
  [
    'camelCase',
    'capitalize',
    'deburr',
    'endsWith',
    'escape',
    'escapeRegExp',
    'kebabCase',
    'lowerCase',
    'lowerFirst',
    'pad',
    'padEnd',
    'padStart',
    'parseInt',
    'repeat',
    'replace',
    'snakeCase',
    'split',
    'startCase',
    'startsWith',
    'template',
    'toLower',
    'toUpper',
    'trim',
    'trimEnd',
    'trimStart',
    'truncate',
    'unescape',
    'upperCase',
    'upperFirst',
    'words'
  ].forEach(function(name) {
    ovt.addMethod('string', name, function() {
      return _[name].apply(_, arguments);
    }, { type: 'sanitizer' });
  });
};
