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

let countItem = (arr, item) => {arr.filter(arrs) => item };

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);
/* =====================
let isItem = (n) => {
  if (n  === 3) {
    return true;
  }
  return false;
};

let countItem = (arr, item) => {
  let isItem = (n) => {
    if (n  = item) {
      return true;
    }
    return false;
  };
  arr.filter((arrs) => isItem(arrs) === true
};
===================== */


/* =====================
===================== */
let countItem = (arr, item) => {
  let occurrences = 0;
  for (const n of arr) {
    if (n === item) {
      occurrences++;
    }
  }
  return occurrences;
};

console.log('filterEven success:', filterEven([1, 2, 3, 4, 5, 4, 4]) === [2, 4, 4, 4]);

/* =====================
let countItem = (arr, item) => {
  let isItem = (n) => {
    if (n === item) {
      return true;
    }
    return false;
  }
  let occurrences = arr.filter(isItem);
  return occurrences.length;
};
===================== */

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the even items. Copy your definition of isEven from part 1; your
  filterEven function MUST use the isEven function and MUST NOT change the
  original array.
===================== */

let isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};
let filterEven = (arr) => {arr.filter((arrs) => isEven(arrs) === true};

console.log('filterEven success:', filterEven([1, 2, 3, 4, 5, 4, 4]) === [2, 4, 4, 4]);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  only the odd items. Copy your definition of isOdd from part 1; your filterOdd
  function MUST use the isOdd function and MUST NOT change the original array.
===================== */

let isOdd = (n) => {
  if (n % 2 === 1) {
    return true;
  }
  return false;
};
let filterOdd = (arr) => arr.filter((arrs) => isOdd(arrs) === true);

console.log('filterOdd success:', filterOdd([1, 2, 3, 4, 5, 4, 4]) === [1, 3, 5]);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item incremented. Copy your definition of plusOne from part 1; your
  mapIncrement function MUST use the plusOne function and MUST NOT change the
  original array.
===================== */

let plusOne = (n) => {n+1};
let mapIncrement = (arr) => {arr.map((arrs) => plusOne(arrs))};

console.log('mapIncrement success:', mapIncrement([1, 2, 3, 4, 5, 4, 4]) === [2, 3, 4, 5, 6, 5, 5]);

/* =====================
Instructions: Write a function which takes an array and returns a new array with
  each item tripled. Copy your definition of timesThree from part 1; your
  mapTriple function MUST use the timesThree function and MUST NOT change the
  original array.
===================== */

let timesThree = (n) => {n*3};
let mapTriple = (arr) => {arr.map((arrs) => timesThree(arrs))};

console.log('mapTriple success:', mapTriple([1, 2, 3, 4, 5, 4, 4]) === [3, 6, 9, 12, 15, 12, 12]);

/* =====================
Instructions: Write a function which takes an array and returns the sum of all
  the items in the array. Copy your definition of add from part 1; your
  reduceSum function MUST use the add function and MUST NOT change the original
  array.
===================== */

let add = (n1, n2) => {n1 + n2};
let reduceSum = (arr) => {arr.reduce((anum, crnum) => add(anum, crnum))};

console.log('reduceSum success:', reduceSum([1, 2, 3, 4, 5, 4, 4]) === 23);

/* =====================
Instructions: Write a function which takes an array and returns the product of
  all the items in the array. Copy your definition of multiply from part 1; your
  reduceProduct function MUST use the multiply function and MUST NOT change the
  original array.
===================== */

let multiply = (n1, n2) => {n1 * n2};
let reduceProduct = (arr) => {arr.reduce((multn, pron) => multiply(multn, pron))};

console.log('reduceProduct success:', reduceProduct([1, 2, 3, 4, 5, 4, 4]) === 1920);
