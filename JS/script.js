// Завдання 1:
let arr = [];
arr[0] = 42;
arr[1] = "Hello";
arr[2] = true;
arr[3] = null;
console.log(arr.length);
arr[4] = prompt("Enter a value");
console.log(arr[4]);
arr.shift();
console.log(arr);

// // Завдання 2:
// let cities = ["Ternopil", "Lviv", "Warsaw"];
// let result = cities.join("*");
// console.log(result);

// //Завдання 3 (цикл for):
// let arr = [2, 3, 4, 5];
// let product = 1;

// for (let i = 0; i < arr.length; i++) {
//   product *= arr[i];
// }

// console.log(product);

// //Завдання 3 (цикл while):
// let arr = [2, 3, 4, 5];
// let product1 = 1;
// let i = 0;

// while (i < arr.length) {
//   product1 *= arr[i];
//   i++;
// }

// console.log(product1);

// //Завдання 4:
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

// //Завдання 5:
// function randArray(k) {
//   let arr = [];
//   for (let i = 0; i < k; i++) {
//     arr[i] = Math.floor(Math.random() * 500) + 1;
//   }
//   return arr;
// }

// console.log(randArray(5));

// //Завдання 6:
// function raiseToDegree(a, b) {
//   return Math.pow(a, b);
// }

// console.log(raiseToDegree(3, 4));

// //Завдання 7:
// function findMin() {
//   let min = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }

// console.log(findMin(12, 14, 4, -4, 0.2));

// //Завдання 8:
// function findUnique(arr) {
//   let uniqueValues = new Set(arr);
//   return uniqueValues.size === arr.length;
// }

// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

// //Завдання 9:
// function lastElem(arr, x = 1) {
//   return arr.slice(-x);
// }

// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));

// //Завдання 10:
// function capitalizeString(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }

// let inputString = 'i love java script';
// let outputString = capitalizeString(inputString);
// console.log(outputString);
