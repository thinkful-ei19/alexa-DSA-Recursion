'use strict';

// 2. Array Double

let arr2 = [];
function double(arr) {
  if (arr.length === 0) {
    return;
  }

  const doubleNum = arr[0] * 2;
  //   console.log(doubleNum);
  arr2.push(doubleNum);
  console.log(arr2);
  return double(arr.slice(1));
}


let arr = [1, 2, 3];
double(arr);