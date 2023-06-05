let x = 1;
let y = 2;
let res1 = x + "" + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"
let res2 = Boolean(x) + "" + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = Number(x) + Number(y);
console.log(res4); // NaN
console.log(typeof res4); // "number"

let userInput = prompt("Введіть число:");
let number = Number(userInput);

if (number % 2 === 0 && number > 0) {
  console.log("Введене число є парним додатним.");
} else {
  console.log("Введене число не є парним додатним.");
}

if (number % 7 === 0) {
  console.log("Введене число кратне числу 7.");
} else {
  console.log("Введене число не кратне числу 7.");
}
let isAdult = prompt("Ви досягли повнолітнього віку? Введіть 'так' або 'ні'.");

if (isAdult === "так") {
  console.log("Ви досягли повнолітнього віку.");
} else if (isAdult === "ні") {
  console.log("Ви ще надто молоді.");
} else {
  console.log("Некоректні дані.");
}

let side1 = Number(prompt("Введіть довжину першої сторони трикутника:"));
let side2 = Number(prompt("Введіть довжину другої сторони трикутника:"));
let side3 = Number(prompt("Введіть довжину третьої сторони трикутника:"));

if (side1 > 0 && side2 > 0 && side3 > 0) {
  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    // Розрахунок площі трикутника за формулою Герона
    let p = (side1 + side2 + side3) / 2; // Півпериметр
    let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    console.log("Площа трикутника: " + area.toFixed(3));

    // Перевірка на прямокутність
    if (
      side1 ** 2 + side2 ** 2 === side3 ** 2 ||
      side2 ** 2 + side3 ** 2 === side1 ** 2 ||
      side1 ** 2 + side3 ** 2 === side2 ** 2
    ) {
      console.log("Цей трикутник є прямокутним.");
    } else {
      console.log("Цей трикутник не є прямокутним.");
    }
  } else {
    console.log("Некоректні дані для трикутника.");
  }
} else {
  console.log("Некоректні дані.");
}

// Спосіб 1: Використання оператора if-else-if
let tim3 = new Date().getHours();

if (tim3 >= 23 || tim3 < 5) {
  console.log("Доброї ночі");
} else if (tim3 >= 5 && tim3 < 11) {
  console.log("Доброго ранку");
} else if (tim3 >= 11 && tim3 < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}

// Спосіб 2: Використання оператора switch
let tim = new Date().getHours();

switch (true) {
  case tim3 >= 23 || tim3 < 5:
    console.log("Доброї ночі");
    break;
  case tim3 >= 5 && tim3 < 11:
    console.log("Доброго ранку");
    break;
  case tim3 >= 11 && tim3 < 17:
    console.log("Доброго дня");
    break;
  default:
    console.log("Доброго вечора");
    break;
}
