'use strict';

module.exports = function ObjectExtention(Ovt, _) {

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
    Ovt.addMethod('string', name, function() {
      return _[name].apply(_, arguments);
    }, { type: 'sanitizer' });
  });
};