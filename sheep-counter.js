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



