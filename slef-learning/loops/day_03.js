// SECTION A: Basics (1–10)

// let arr = [10, 20, 30, 40, 50];

// Print all elements of array

// for (let value of arr) {
//   console.log(value);
// }

// Print array elements in reverse order

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// Print first element

// console.log(arr[0]);

// Print last element

// console.log(arr[arr.length - 1]);

// Find sum of all elements

// let sum = 0;

// for (let value of arr) {
//   sum += value;
// }

// console.log(sum);

// Find average of array elements

// let sum = 0;

// for (let value of arr) {
//   sum += value;
// }

// let average = sum / arr.length;

// console.log(average);

// Count total elements in array (without using .length directly)

// let count = 0;

// for (let value of arr) {
//   count++;
// }

// console.log(count);

// Print all elements at even index positions

// for (let i = 0; i <= arr.length - 1; i++) {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// Print all elements at odd index positions

// for (let i = 0; i <= arr.length - 1; i++) {
//   if (i % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// Print only elements greater than 25

// for (let value of arr) {
//   if (25 < value) {
//     console.log(value);
//   }
// }

// SECTION B: Searching + Counting (11–20)

let nums = [5, 2, 7, 2, 9, 2, 1, 7];

// Count how many times 2 appears

// let count = 0;

// for (let value of nums) {
//   if (value === 2) {
//     count++;
//   }
// }

// console.log(count);

// Count how many times 7 appears

// let count = 0;

// for (let value of nums) {
//   if (value === 7) {
//     count++;
//   }
// }

// console.log(count);

// Find the largest number in the array

// let largeValue = 0;

// for (let value of nums) {
//   if (largeValue < value) {
//     largeValue = value;
//   }
// }

// console.log(largeValue);

// Find the smallest number in the array

// let smallValue = 9;

// for (let value of nums) {
//   if (smallValue > value) {
//     smallValue = value;
//   }
// }

// console.log(smallValue);

// Check if 9 exists in array (print true/false)

// let target = 9;

// let valueExist = false;

// for (let value of nums) {
//   if (value === target) {
//     valueExist = true;
//     break;
//   }
// }

// console.log(valueExist);

// Check if 10 exists in array (print true/false)

// let target = 10;

// let valueExist = false;

// for (let value of nums) {
//   if (value === target) {
//     valueExist = true;
//     break;
//   }
// }

// console.log(valueExist);

// Find index of first occurrence of 7

// for (let i = 0; i <= nums.length - 1; i++) {
//   if (nums[i] === 7) {
//     console.log(i);
//     break;
//   }
// }

// Find index of last occurrence of 2

// for (let i = nums.length - 1; i >= 0; i--) {
//   if (nums[i] === 2) {
//     console.log(i);
//     break;
//   }
// }

// Create a new array that contains only even numbers

// let newNum = [];

// for (let value of nums) {
//   if (value % 2 === 0) {
//     newNum.push(value);
//   }
// }

// console.log(newNum);

// Create a new array that contains only odd numbers

// let newNum = [];

// for (let value of nums) {
//   if (value % 2 === 1) {
//     newNum.push(value);
//   }
// }

// console.log(newNum);
