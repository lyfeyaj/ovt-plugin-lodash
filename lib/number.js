'use strict';

const _ = require('lodash');

module.exports = function NumberExtention(ovt) {
  // Sanitizers from `lodash`
  [
    'add',
    'ceil',
    'floor',
    'round',
    'subtract',
    'clamp',
    'random'
  ].forEach(function(name) {
    ovt.addMethod('number', name, function() {
      return _[name].apply(_, arguments);
    }, { type: 'sanitizer' });
  });

  // Validators from `lodash`
  [
    'inRange',
    'isInteger',
    'gt',
    'gte',
    'lt',
    'lte'
  ].forEach(function(name) {
    ovt.addMethod('number', name, function() {
      return _[name].apply(_, arguments);
    });
  });
};
