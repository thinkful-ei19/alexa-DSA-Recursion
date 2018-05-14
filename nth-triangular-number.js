'use strict';

function triangular(num) {
  if (num <= 1) {
    return num;
  }

  return num + triangular(num - 1);
}

console.log(triangular(3));