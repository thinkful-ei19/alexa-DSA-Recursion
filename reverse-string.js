'use strict';

// 3. Reverse String

// my first solution

function reverse(str) {
  if (str === '') {
    return '';
  }
  
  const lastChar = str[str.length - 1];
    
  return lastChar + reverse(str.slice(0, -1));
}
  
  
console.log(reverse('hello'));

//second solution

function reverse2(str) {
  if (str === '') {
    return '';
  }
  
  const newChar = str[0];
  
  return reverse2(str.slice(1)) + newChar;
}
  
const str = 'hello';
reverse2(str);
  
  