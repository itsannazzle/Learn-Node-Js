import _ from 'loadsh';

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

 
console.log(myOddEvenArray);