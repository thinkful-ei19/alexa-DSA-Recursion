'use strict';

// Recursive Solution

// first attempt

// let arr2 = [];
// function double(arr) {
//   if (arr.length === 0) {
//     return;
//   }

//   const doubleNum = arr[0] * 2;
//   //   console.log(doubleNum);
//   arr2.push(doubleNum);
//   console.log(arr2);
//   return double(arr.slice(1));
// }


// let arr = [1, 2, 3];
// double(arr);


// second attempt

// function double(arr) {
//   if (arr.length === 0) {
//     return [];
//   }

//   const doubleNum = arr[0] * 2;
  
//   return [doubleNum, ...double(arr.slice(1))];
// }


// let arr = [1, 2, 3];
// console.log(double(arr));

// Iterative Solution

function double2(array) {
  let doubledArray = [];
  let num;
  for(let i = 0; i < array.length; i++) {
    num = array[i] * 2;
    doubledArray.push(num);
  }

  return doubledArray;
}

let arr = [1, 2, 3];
console.log(double2(arr));