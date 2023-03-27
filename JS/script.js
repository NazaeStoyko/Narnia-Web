console.log("Nazar");

let a = 10;
let b = "Hello world";
console.log(a, b);
b = a;
console.log(a, b);

let obj = {
    String: "Hello",
    Number: 42,
    Boolean: true,
    Undefined: undefined,
    Null: null
  };

  console.log(obj);

  let isAdult = confirm("Are you 18 years old or older?");
console.log(isAdult);


let name = "Stas";
let surname = "Nazar";
let group = "IT-91";
let yearOfBirth = 2000;
let isMarried = false;

console.log(typeof yearOfBirth, typeof isMarried, typeof name);
let nullVar = null;
let undefinedVar;
console.log(typeof nullVar, typeof undefinedVar);

let login = prompt("Enter your login:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");
alert(`Dear User, your email is ${email}, your password is ${password}`);


let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30; // Approximate value
console.log(`Seconds in an hour: ${secondsInHour}`);
console.log(`Seconds in a day: ${secondsInDay}`);
console.log(`Seconds in a month: ${secondsInMonth}`);