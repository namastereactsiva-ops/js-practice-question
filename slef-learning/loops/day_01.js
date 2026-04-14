// SECTION A: Basic Printing (1–10)

// Print numbers from 1 to 10

// let i = 1;

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// Print numbers from 1 to 50

// let num = 1;

// while (num <= 50) {
//   console.log(num);
//   num++;
// }

// Print numbers from 50 to 1

// for (let i = 50; i >= 1; i--) {
//   console.log(i);
// }

// Print numbers from 0 to 20

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// Print numbers from 10 to 100 (step 10)

// let num = 10;

// while (num <= 100) {
//   console.log(num);
//   num++;
// }

// Print all even numbers from 1 to 20

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Print all odd numbers from 1 to 20

// let num = 1;

// while (num <= 20) {
//   if (num % 2 === 1) {
//     console.log(num);
//   }
//   num++;
// }

// Print numbers from 100 to 0 (step 5)

// for (let num = 100; num >= 0; num--) {
//   console.log(num);
// }

// Print numbers from -10 to 10

// let num = -10;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// Print numbers from 1 to 30, but only multiples of 3

// for (let num = 1; num <= 30; num++) {
//   if (num % 3 === 0) {
//     console.log(num);
//   }
// }

// let num = 10;
// while (num <= 100) {
//   console.log(num);
//   num += 10;
// }

// Print 2,4,6,8,10

// for(let num = 1; num <= 10; num++){
//     if(num % 2 === 0){
//         console.log(num);
//     }
// }

// Print 1,4,7,10,13,16,19

// for (let num = 1; num <= 20; num++) {
//   console.log(num);
//   num += 2;
// }

// Print 50,40,30,20,10

// for (let num = 50; num >= 10; num--) {
//   console.log(num);
//   num -= 9;
// }

// Print -5 to 5

// for (let j = -5; j <= 5; j++) {
//   console.log(j);
// }

// Print 100,90,80,70,60,50

// let num = 100;

// while (num >= 50) {
//   console.log(num);
//   num -= 10;
// }

// SECTION B: Sum and Counting (11–20)

// Find the sum of numbers from 1 to 10

// let num = 1;
// let sum = 0;

// while (num <= 10) {
//   sum += num;
//   num++;
// }

// console.log(sum);

// Find the sum of numbers from 1 to 100 => 5050

// let result = 0;

// for (let i = 1; i <= 100; i++) {
//   result += i;
// }

// console.log(result);

// Find the sum of all even numbers from 1 to 50 => 650

// let result = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     result += i;
//   }
// }

// console.log(result);

// Find the sum of all odd numbers from 1 to 50

// let result = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 1) {
//     result += i;
//   }
// }

// console.log(result);

// Count how many numbers exist between 1 to 100

// let result = 0;

// for (let i = 1; i <= 100; i++) {
//   result += 1;
// }

// console.log(result);

// Count how many even numbers exist between 1 to 100

// let result = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     result += 1;
//   }
// }

// console.log(result);

// Count how many odd numbers exist between 1 to 100

// let result = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     result += 1;
//   }
// }

// console.log(result);

// Print the square of numbers from 1 to 10

// let result = 0;

// for (let i = 1; i <= 10; i++) {
//   result += i ** 2;
//     console.log(result);
// }

// Print the cube of numbers from 1 to 10

// let result = 0;

// for (let i = 1; i <= 10; i++) {
//   result += i ** 3;
// console.log(result);
// }

// Print the sum of squares from 1 to 5
// (example: 1² + 2² + 3² + 4² + 5²)

// let num = 0;

// for (let i = 1; i <= 7; i++) {
//   num += i ** 2;
// }

// console.log(num);

// Print the multiplication table of 5

// let num = 0;

// for (let i = 1; i <= 10; i++) {
//   num = i * 5;
//   console.log(`${i} x 5 = ${num}`);
// }

// Print the multiplication table of 12

// let num = 0;

// for (let i = 1; i <= 10; i++) {
//   num = i * 12;
//   console.log(`${i} x 12 = ${num}`);
// }

// Print multiplication tables from 1 to 5

// let result = 0;

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     result = j * i;
//     console.log(`${j} x ${i} = ${result}`);
//   }
// }

// Find factorial of 5
// (5! = 5×4×3×2×1)

// let result;

// for (let i = 5; i >= 1; i--) {
//   result *= i;
// }

// console.log(result);

// Find factorial of a number n = 7

// let result;

// for (let i = 7; i >= 1; i--) {
//   result *= i;
// }

// console.log(result);

// Print all numbers between 1 to 50 that are divisible by 5

// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Print all numbers between 1 to 50 that are divisible by 3 and 5

// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0 || i % 3 === 0) {
//     console.log(i);
//   }
// }

// Print all numbers between 1 to 100 divisible by 7

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// Print numbers from 1 to 20, but skip 10 (don’t print 10)

// for (let i = 1; i <= 20; i++) {
//   if (i === 10) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// Print numbers from 1 to 20, but stop when number becomes 15

// for (let i = 1; i <= 20; i++) {
//   if (i === 15) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// step 10

// for (let i = 1; i <= 100; i += 10) {
//   console.log(i);
// }

// step 5

// for (let i = 100; i >= 1; i -= 5) {
//   console.log(i);
// }

// square print

// for (let i = 1; i <= 10; i++) {
//   console.log(i ** 2);
// }

// cube print

// for (let i = 1; i <= 10; i++) {
//   console.log(i ** 3);
// }

// factorial 5

// let result = 1;

// for (let i = 1; i <= 5; i++) {
//   result *= i;
// }

// console.log(result);

// factorial 7

// let result = 1;

// for (let i = 1; i <= 5; i++) {
//   result *= i;
// }

// console.log(result);

// divisible by 3 and 5

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
