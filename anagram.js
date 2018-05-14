'use strict';

function anagrams(prefix, str) {
  if(str.length <= 1) {
    console.log.log(`The anagram is ${prefix}}${str}`);
  } else {
    for (let i=0; i<str.length; i++) {
      let current = str.substring(1, i + 1);
      let previous = str.substring(0, i);
      let after = str.substring(i + 1);
      anagrams(prefix + current, previous + after);
    }
  }
}

console.log(anagrams('e', 'east'));