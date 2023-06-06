//Завдання  1:

function upperCase(str) {
  const regex = /^[A-Z]/;
  if (regex.test(str)) {
    console.log("Рядок починається з верхнього регістру");
  } else {
    console.log("Рядок не починається з верхнього регістру");
  }
}

upperCase("regexp");
upperCase("RegExp");

//Завдання  2:

const inputString = "Java Script";
const regex = /(.*)(\s)(.*)/;
const result = inputString.replace(regex, "$3, $1");
console.log(result);

//Завдання  3:

function validateCardNumber(cardNumber) {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return regex.test(cardNumber);
}

console.log(validateCardNumber("9999-9999-9999-9999")); // true
console.log(validateCardNumber("1234-5678-9012-3456")); // false

//Завдання  4:

function checkEmail(email) {
  const regex =
    /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  if (regex.test(email)) {
    console.log("Електронна пошта правильна!");
  } else {
    console.log("Електронна адреса неправильна!");
  }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");
checkEmail("my_ma--il@gmail.com");

//Завдання  5:

function checkLogin(login) {
  const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
  const numbers = login.match(/\d+(\.\d+)?/g);
  console.log(regex.test(login));
  console.log(numbers);
}

checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
