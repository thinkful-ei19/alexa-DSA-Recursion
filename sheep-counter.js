'use strict';

// Recursive Solution

function sheepCounter(num) {
  if (num === 0) {
    return;
  }

  console.log(num + ' - Another sheep jump over the fence');
  return sheepCounter(num - 1);
}

sheepCounter(3);


// Iterative Solution

function sheepCounter2(number) {
  for(let i = number; i > 0; i--) {
    console.log(`${i} - Another sheep jump over the fence`);
  }
}

sheepCounter2(3);




