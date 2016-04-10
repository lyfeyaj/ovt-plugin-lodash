'use strict';

const _ = require('lodash');

let Ovt;

try {
  Ovt = require('ovt');
} catch (e) {
  console.log(`\u001b[31m
    You don't have module 'ovt' installed, please run command:
    \`npm install ovt --save\`
    to install the missing module.
    Otherwise 'ovt-plugin-lodash' will not be activated.
  \u001b[39m`);
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
