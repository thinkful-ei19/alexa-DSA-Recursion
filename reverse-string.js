'use strict';

// Recursive Solution

// my first solution

// function reverse(str) {
//   if (str === '') {
//     return '';
//   }
  
//   const lastChar = str[str.length - 1];
    
//   return lastChar + reverse(str.slice(0, -1));
// }
  
  
// console.log(reverse('hello'));


// //second solution

// function reverse2(str) {
//   if (str === '') {
//     return '';
//   }
    
//   const newChar = str[0];
    
//   return reverse2(str.slice(1)) + newChar;
// }
    
// console.log(reverse2('hello'));


// Iterative Solution

function reverse3(string) {
  const strArr = string.split('');
//   console.log(strArr);

  const reverseArr = strArr.reverse();
//   console.log(strArr);

  const joinArr = reverseArr.join('');
//   console.log(joinArr);

  return joinArr;
}

console.log(reverse3('hello'));


  
