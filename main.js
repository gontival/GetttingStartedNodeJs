var math_example = require('jlvt_math_example');
var result = 0;

console.log();
result = math_example.addition(5, 0);
console.log('addition(5, 0)=', result);

console.log();
result = math_example.substraction(50, 10);
console.log('substraction(50, 10)=', result);

console.log();
result = math_example.multiplication(3, 7);
console.log('multiplication(3, 7)=', result);

console.log();
result = math_example.division(27, 3);
console.log('division(27, 3)=', result);

console.log();
result = math_example.fibonacci(3);
console.log('fibonacci(3)=', result);

console.log('done');