'use strict';

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
  
  