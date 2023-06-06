//Завдання  1:
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // ["Ray", "Bob"]

//Завдання  2:

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

//Завдання  3:

function mul(...args) {
  return args
    .filter((arg) => typeof arg === "number")
    .reduce((acc, val) => acc * val, 1);
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//Завдання  4:

function mapBuilder(keysArray, valuesArray) {
  const map = new Map();
  keysArray.forEach((key, index) => {
    map.set(key, valuesArray[index]);
  });
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
