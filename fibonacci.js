'use strict';

// 8. Fibonacci

function fib(n) {
  if (n === 1) {
    return 1;
  }

  if (n === 0) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(13));