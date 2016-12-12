'use strict';

const _ = require('lodash');

module.exports = function ArrayExtention(ovt) {

  // Validators depends on lodash
  const validateUnique = function(val) {
    let newVal = _.uniq(val);
    return newVal.length === val.length;
  };

  ovt.addMethod('array', 'isUnique', validateUnique);

  // Sanitizers from `lodash`
  [
    // Array specific sanitizers
    'chunk',
    'compact',
    'concat',
    'difference',
    'differenceBy',
    'differenceWith',
    'drop',
    'dropRight',
    'dropRightWhile',
    'dropWhile',
    'fill',
    'findIndex',
    'findLastIndex',
    'first',
    'flatten',
    'flattenDeep',
    'flattenDepth',
    'fromPairs',
    'head',
    'indexOf',
    'initial',
    'intersection',
    'intersectionBy',
    'intersectionWith',
    'join',
    'last',
    'lastIndexOf',
    'pull',
    'pullAll',
    'pullAllBy',
    'pullAllWith',
    'pullAt',
    'remove',
    'reverse',
    'slice',
    'sortedIndex',
    'sortedIndexBy',
    'sortedIndexOf',
    'sortedLastIndex',
    'sortedLastIndexBy',
    'sortedLastIndexOf',
    'sortedUniq',
    'sortedUniqBy',
    'tail',
    'take',
    'takeRight',
    'takeRightWhile',
    'takeWhile',
    'union',
    'unionBy',
    'unionWith',
    'uniq',
    'uniqBy',
    'uniqWith',
    'unzip',
    'unzipWith',
    'without',
    'xor',
    'xorBy',
    'xorWith',
    'zip',
    'zipObject',
    'zipObjectDeep',
    'zipWith',

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
    'sortBy',

    // Math sanitizers
    'max',
    'mean',
    'min',
    'sum'
  ].forEach(function(name) {
    ovt.addMethod('array', name, function() {
      return _[name].apply(_, arguments);
    }, { type: 'sanitizer' });
  });
};
