'use strict';

// Recursive Solution

// outout -->
// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

const chart = [
  {id: 'Zuckerberg', owner: null}, // indent - 0
  {id: 'Schroepfer', owner: 'Zuckerberg'}, // indent - 1
  {id: 'Bosworth', owner:'Schroepfer' }, // indent - 2
  {id: 'Steve', owner: 'Bosworth'},
  {id: 'Kyle', owner: 'Bosworth'},
  {id: 'Andra', owner: 'Bosworth'},
  {id: 'Zhao', owner:'Schroepfer' },
  {id: 'Richie', owner: 'Zhao'},
  {id: 'Sofia', owner: 'Zhao'},
  {id: 'Jen', owner: 'Zhao'},
  {id: 'Schrage', owner: 'Zuckerberg'},
  {id: 'VanDyck', owner: 'Schrage'},
  {id: 'Sabrina', owner: 'VanDyck'},
  {id: 'Michelle', owner: 'VanDyck'},
  {id: 'Josh', owner: 'VanDyck'},
  {id: 'Swain', owner: 'Schrage'},
  {id: 'Blanch', owner: 'Swain'},
  {id: 'Tom', owner: 'Swain'},
  {id: 'Joe', owner: 'Swain'}
];

function organize(chart, owner) {
  let node = {};

  chart.filter(item => item.owner === owner)
    .forEach(item => node[item.id] = organize(chart, item.id));
  return node;
}

console.log(JSON.stringify(
  organize(chart, null),
  null, 2)
);

// console.log(JSON.stringify(
//   organize(chart, null),
//   null, 2)
//   .replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ")
// );

// console.log(organize(chart, null));

// output of each recursive call
//   node = {
//     'Zuckerberg': {
//       'Schroepfer': organize(chart, 'Schroepfer'),
//        'Schrage': organize(chart, 'Schrage'),
//     }
//   };