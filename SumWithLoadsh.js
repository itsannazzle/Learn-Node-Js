const _ = require('loadsh');

// sum array with for loop

const arr = [1,2,3,4,5];

let sum = 0;

for(let i = 0; i < arr.length; i++){
    // i = 0, 0 < 5, 
    // sum = 0 + 1
    // sum = 1
    sum += arr[i];
}

console.log(sum);
console.log(arr.length);

// sum array with reduce
let sumWithReduce = arr.reduce((previous, current) => {
    return previous+current;
})

console.log(sumWithReduce);

// sum array with loadsh

const sumWithLoadsh = _.sum(arr);
console.log(sumWithLoadsh);