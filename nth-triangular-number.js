'use strict';

// Recursive Solution

function triangular(num) {
  if (num <= 1) {
    return num;
  }

  return num + triangular(num - 1);
}

console.log(triangular(3));


// Iterative Solution

const triangular2 = (number) => {
  const n = number * (number + 1) / 2;
  return n;
};

console.log(triangular2(3)); 