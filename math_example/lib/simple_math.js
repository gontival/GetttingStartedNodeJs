// simple_math module
var call_counter = require('./call_counter.js');

function add(x, y) {
    call_counter();
    return x + y;
}

function substract(x, y) {
    call_counter();
    return x - y;
}

module.exports = {
    addition: add,
    substraction : substract
}