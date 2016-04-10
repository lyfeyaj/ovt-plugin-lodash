'use strict';

module.exports = function ObjectExtention(Ovt, _) {
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
    Ovt.addMethod('object', name, function() {
      return _[name].apply(_, arguments);
    }, { type: 'sanitizer' });
  });
};
