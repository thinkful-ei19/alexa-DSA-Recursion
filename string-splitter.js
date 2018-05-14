'use strict';

//start from beginning
// go to separator
// return --> slice
function splitString(str, separator) {
  const indx = str.indexOf(separator);
  
  if (indx === -1) {
    return str;
  }
  
  
  const newStr = str.slice(0 , indx);
  // console.log(str.slice(indx)); // => my name is Alexa.
  // console.log(newStr); // => Hello
  
  return newStr + splitString(str.slice(indx + 1), separator); 
}
  

splitString('Hello my name is Alexa.', ' ');