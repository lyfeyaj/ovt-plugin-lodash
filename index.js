const _ = require('lodash');

let Ovt;

try {
  Ovt = require('ovt');
} catch (e) {
  console.log(`
    You don't have 'ovt' installed, please run command:
    \`npm install ovt --save\`
    to install the missing module.
    Otherwise 'ovt-lodash' will not be activated.
  `);
}

if (Ovt) {
  [
    'array',
    'number',
    'object',
    'string'
  ].forEach(function(type) {
    require(`./lib/${type}`)(Ovt, _);
  });
}
