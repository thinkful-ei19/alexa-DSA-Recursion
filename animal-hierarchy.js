'use strict';

// array of objects
// each containing an id and parent
// input -->
const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];


// output -> represents data in a tree structure
// {
//   "Animals": {
//     "Mammals": {
//       "Dogs": {
//         "Golden Retriever": {},
//         "Husky": {}
//       },
//       "Cats": {
//         "Bengal": {}
//       }
//     }
//   }
// }
function traverse(animalHierarchy, parent) {
  // define empty object -- store results from forEach 
  let node = {};

  // filter through array where parent equals the parent we pass
  // null is root
  animalHierarchy.filter(item => item.parent === parent)
    // forEach animal, assign property to node with same id
    // recursion --> traverse again but for parent passing in id
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
console.log(JSON.stringify(
  traverse(animalHierarchy, null),
  null, 2)
);

