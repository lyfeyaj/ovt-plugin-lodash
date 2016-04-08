module.exports = function NumberExtention(Ovt, _) {
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
    Ovt.addMethod('number', name, function() {
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
    Ovt.addMethod('number', name, function() {
      return _[name].apply(_, arguments);
    });
  });
};
