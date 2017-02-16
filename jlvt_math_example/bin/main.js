// JavaScript source code
var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(_filename)), '../lib');
var simple = require(lib + 'simple_math.js');
var advanced = require(lib + '/advanced_math.js');
module.exports = {
    addition: simple.addition,
    substraction: simple.substraction,
    multiplication: advanced.multiplication,
    division: advanced.division,
    fibonacci : advanced.fibonacci
}