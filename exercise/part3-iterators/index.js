/* =====================
# Exercise: Iterators

A core part of data manipulation in JavaScript is looping over values in an
array and performing some operations on those values. In this exercise we will
practice some of the most common types of iterative operations.

Functions that `return` can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function which counts the number of times a value occurs in an array
Example: countItem(['a', 'b', 'a'], 'a') should return 2
===================== */

let countItem = (arr, item) => {function f(arr, item) {
  var n = 0;
  for (i = 0; i < Array.length; i++) {
    if(arry[i] == item){n++}
    }
    return n;
  }
};

let countItem = (arr, item) => {function(obj, value) {
  var count = 0;
  for ( const property in obj ) {
    if( typeof obj[property] === 'object') {
      count = count + countValuesInObj(obj[property], value);
    } 
    if(obj[property] === value ) {
      return 1; // count = count + 1; // count++;
    }
  }
  return count;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the even items. Copy your definition of isEven from part 1; your
  filterEven function MUST use the isEven function and MUST NOT change the
  original array.
===================== */

/*
let isEven = (x) => {return x % 2 ==  0};
let filterEven = (arr) => {
  let newArray = [] ;
  for (var i = 0 <arr.length; i++) {
    if(arr[i] isEven)
  }
};
*/
let isEven = (x) => {return x % 2 ==  0};
let filterEven = (arr) => arr.filter((number) => isEven(number));

console.log('filterEven success:', _(filterEven([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 4, 4, 4]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the odd items. Copy your definition of isOdd from part 1; your filterOdd
  function MUST use the isOdd function and MUST NOT change the original array.

let isOdd = (x) => {return (x % 2 !== 0)};
console.log('isOdd success:', isOdd(4) === false && isOdd(5) === true);
ASK ABOUT ISEVEN VS ISODD
===================== */

let isOdd = (n) => {return (x % 2 !== 0)};
let filterOdd = (arr) => {arr.filter(isOdd)};

console.log('filterOdd success:', _(filterOdd([1, 2, 3, 4, 5, 4, 4])).isEqual([1, 3, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item incremented. Copy your definition of plusOne from part 1; your
  mapIncrement function MUST use the plusOne function and MUST NOT change the
  original array.
.map returns whole array, filter return array based on subset that is defined
  arr.map((number) => plusOne(number));
===================== */

let plusOne = (n) => {return (n + 1)};
let mapIncrement = (arr) => {(arr).val++};

console.log('mapIncrement success:', _(mapIncrement([1, 2, 3, 4, 5, 4, 4])).isEqual([2, 3, 4, 5, 6, 5, 5]));

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item tripled. Copy your definition of timesThree from part 1; your
  mapTriple function MUST use the timesThree function and MUST NOT change the
  original array.

let timesThree = (n) => {return(x * 3)};
let mapTriple = (arr) => {
  let newArray = [];
  for newArray => Array.filter(timesThree)
};
===================== */

let timesThree = (n) => {return(x * 3)};
let mapTriple = (arr) => {timesThree(arr)};

console.log('mapTriple success:', _(mapTriple([1, 2, 3, 4, 5, 4, 4])).isEqual([3, 6, 9, 12, 15, 12, 12]));

/* =====================
Instructions: Write a function which takes an array and returns the sum of all
  the items in the array. Copy your definition of add from part 1; your
  reduceSum function MUST use the add function and MUST NOT change the original
  array.
===================== */

let add = (n1, n2) => {return n1 + n2};
let reduceSum = (arr) => {add(arr)};

console.log('reduceSum success:', reduceSum([1, 2, 3, 4, 5, 4, 4]) === 23);

/* =====================
Instructions: Write a function which takes an array and returns the product of
  all the items in the array. Copy your definition of multiply from part 1; your
  reduceProduct function MUST use the multiply function and MUST NOT change the
  original array.
===================== */

let multiply = (n1, n2) => {return(n1 * n2)};
let reduceProduct = (arr) => {multiply(arr)};

console.log('reduceProduct success:', reduceProduct([1, 2, 3, 4, 5, 4, 4]) === 1920);
