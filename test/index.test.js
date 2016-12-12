'use strict';

var expect = require('chai').expect;
var ovt = require('ovt');
var _ = require('lodash');
ovt.plugin(require('../'));

describe('ovt-plugin-lodash', function() {
  describe('string plugin', function() {
    var schema = ovt.string();

    [
      // sanitizers
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
      it(`should have ${name} sanitizer for string type`, function() {
        expect(schema[name]).to.be.a('function');
        expect(_[name]).to.be.a('function');
      });
    });
  });

  describe('number plugin', function() {
    var schema = ovt.number();
    [
      // validators
      'inRange',
      'isInteger',
      'gt',
      'gte',
      'lt',
      'lte'
    ].forEach(function(name) {
      it(`should have ${name} validator for number type`, function() {
        expect(schema[name]).to.be.a('function');
        expect(_[name]).to.be.a('function');
      });
    });

    [
      // sanitizers
      'add',
      'ceil',
      'floor',
      'round',
      'subtract',
      'clamp',
      'random'
    ].forEach(function(name) {
      it(`should have ${name} sanitizer for number type`, function() {
        expect(schema[name]).to.be.a('function');
        expect(_[name]).to.be.a('function');
      });
    });
  });

  describe('array plugin', function() {
    var schema = ovt.array();
    [
      // validators
      'isUnique'
    ].forEach(function(name) {
      it(`should have ${name} validator for array type`, function() {
        expect(schema[name]).to.be.a('function');
      });
    });

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
      it(`should have ${name} sanitizer for array type`, function() {
        expect(schema[name]).to.be.a('function');
        expect(_[name]).to.be.a('function');
      });
    });
  });

  describe('object plugin', function() {
    var schema = ovt.object();
    [
      // sanitizers
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
      it(`should have ${name} sanitizer for object type`, function() {
        expect(schema[name]).to.be.a('function');
        expect(_[name]).to.be.a('function');
      });
    });
  });
});
