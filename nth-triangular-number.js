'use strict';

// 4. nth Triangular Number

function triangular(num) {
  if (num <= 1) {
    return num;
  }

  return num + triangular(num - 1);
}

console.log(triangular(3));