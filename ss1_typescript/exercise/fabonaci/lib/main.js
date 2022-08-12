"use strict";
var fibonacciArray = [0];
var sum = 0;
function fibonacci(n) {
    if(n == 0) return 0
    if (n == 1 || n == 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
for (let i = 0; i <10; i++) {
    fibonacciArray.push(fibonacci(i));
    sum += fibonacciArray[i];
}
console.log(sum);
