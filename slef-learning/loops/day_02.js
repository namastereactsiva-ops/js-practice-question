// let num = 234;
// let rev = 0;

// console.log(num % 10);
// console.log(2 / 10);
// console.log(num / 10);
// console.log(Math.floor(23.4));
// console.log(rev * 10 + 4);
// console.log(4 > 0);

// console.log(num % 10);

// while (num > 0) {
//   let lastDigit = num % 10; // 3
//   rev = rev * 10 + lastDigit; // 13
//   num = Math.floor(num / 10); // 2
// }

// console.log(rev);

// let rev = 0;

// for (let num = -23456; num > 0; num = Math.floor(num / 10)) {
//   let lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
// }

// console.log(rev);

// let do with this a Negative Number

// let num = 674893;

// let rev = 0;

// let sign = num < 0 ? -1 : 1;

// num = Math.abs(num);

// while (num > 0) {
//   let lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num / 10);
// }

// rev = rev * sign;

// console.log(rev);

// Prime Number check

// let num = 10;

// let primeNum = true;

// if (num <= 0) {
//   primeNum = false;
// }

// for (let i = 2; i <= Math.sqrt(num); i++) {
//   if (num % i === 0) {
//     primeNum = false;
//     break;
//   }
// }

// console.log(primeNum ? "prime number" : "not prime number");

// loop  the numbers and find the prime num check 1 to 50

// for (let num = 1; num <= 50; num++) {
//   if (num <= 1) {
//     continue;
//   }

//   let primeNum = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       primeNum = false;
//       break;
//     }
//   }

//   if (primeNum) {
//     console.log(num);
//   }
// }

// console.log(Math.sqrt(9));

// console.log((15000 * 100) / 1000);
// console.log(15000 * 100);

// SECTION A: Counting + Sum Logic (1–10)
// Find sum of numbers from 1 to N (N=20)

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//   sum += i;
// }

// console.log(sum);

// Find sum of numbers between 50 to 100

// let sum = 0;

// for (let i = 50; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

// Find sum of all multiples of 3 between 1 to 30

// let sum = 0;

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// Find sum of all multiples of 5 between 1 to 100

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// Count how many multiples of 7 exist between 1 to 100

// let count = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     count++;
//   }
// }

// console.log(count);

// Count how many numbers are divisible by both 4 and 6 between 1 to 100

// let count = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 4 === 0 && i % 6 === 0) {
//     count++;
//   }
// }

// console.log(count);

// Find product of numbers from 1 to 5

// let sum = 1;

// for (let i = 1; i <= 5; i++) {
//   sum *= i;
// }

// console.log(sum);

// Find factorial of 10

// let sum = 1;

// for (let i = 1; i <= 10; i++) {
//   sum *= i;
// }

// console.log(sum);

// Print first 10 natural numbers and their sum (show both)

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   sum += i;
// }

// console.log(sum);

// Find sum of squares from 1 to 10

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i ** 2;
// }
// console.log(sum);

// SECTION B: Digit Problems (11–20)

// (These are real interview questions)

// Count digits in number n = 45678
// Find sum of digits of n = 45678
// Reverse a number n = 12345
// Check if number n = 121 is palindrome
// Check if number n = 123 is palindrome
// Find product of digits of n = 234
// Find largest digit in number n = 98427
// Find smallest digit in number n = 98427
// Count how many zeros in number n = 10203040
// Print each digit of number n = 5678 separately
