'use strict';

const _ = require('lodash');

module.exports = function ObjectExtention(ovt) {
  // Sanitizers from `lodash`
  [
    // Collection sanitizers
    'countBy',
    'each',
    'forEach',
    'eachRight',
    'forEachRight',
    'every',
    'filter',
    'find',
    'findLast',
    'flatMap',
    'forEach',
    'forEachRight',
    'groupBy',
    'includes',
    'invokeMap',
    'keyBy',
    'map',
    'orderBy',
    'partition',
    'reduce',
    'reduceRight',
    'reject',
    'sample',
    'sampleSize',
    'shuffle',
    'size',
    'some',
    'sortBy'
  ].forEach(function(name) {
    ovt.addMethod('object', name, function() {
      return _[name].apply(_, arguments);
    }, { type: 'sanitizer' });
  });
};
