'use strict';

// 1. Counting Sheep

function sheepCounter(num) {
  if (num === 0) {
    return;
  }

  console.log(num + ' - Another sheep jump over the fence');
  return sheepCounter(num - 1);
}

sheepCounter(3);

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

// 3. Reverse String

// my first solution (not working):

// function reverse(str) {
//   if (str === '') {
//     return '';
//   }

//   const lastChar = str.charAt(str.length() - 1);
//   console.log(lastChar);

//   return lastChar + reverse(str.slice(-1));
// }

// let str = 'hello';
// reverse(str);

//second solution

function reverse(str) {
  if (str === '') {
    return '';
  }

  const newChar = str[0];

  return reverse(str.slice(1)) + newChar;
}

const str = 'hello';
reverse(str);

// 4. nth Triangular Number





// 5. String Splitter

//start from beginning
// go to separator
// return --> slice
function splitString(str, separator) {
  const indx = str.indexOf(separator);

  if (indx === -1) {
    return '';
  }


  const newStr = str.slice(0 , indx);
//   console.log(str.slice(indx)); // => my name is Alexa.
//   console.log(newStr); // => Hello

  return newStr + splitString(str.slice(indx), separator); 
}


splitString('Hello my name is Alexa.', ' ');