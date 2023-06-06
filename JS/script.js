// Завдання 1:
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor)); // 3

// // Завдання 2:
// function showProps(obj) {
//   let properties = Object.keys(obj);
//   let values = Object.values(obj);
//   console.log("Properties: ", properties);
//   console.log("Values: ", values);
// }

// let obj = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: "value3",
//   prop4: "value4",
//   prop5: "value5"
// };

// showProps(obj);

// //Завдання 3
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     console.log(this.name + " " + this.surname);
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   showFullName(middleName) {
//     console.log(this.surname + " " + this.name + " " + middleName);
//   }

//   showCourse() {
//     let currentYear = new Date().getFullYear();
//     let course = currentYear - this.year + 1;
//     return course;
//   }
// }

// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

//Завдання 4:
// class Worker {
//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//     this.experience = 1.2;
//   }

//   showSalary() {
//     let salary = this.dayRate * this.workingDays;
//     console.log(this.fullName + " salary: " + salary);
//   }

//   showSalaryWithExperience() {
//     let salaryWithExperience =
//       this.dayRate * this.workingDays * this.experience;
//     console.log(this.fullName + " salary: " + salaryWithExperience);
//   }

//   get showExp() {
//     return this.experience;
//   }

//   set setExp(value) {
//     this.experience = value;
//   }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);

//Завдання 5:
// class GeometricFigure {
//   getArea() {
//     return 0;
//   }

//   toString() {
//     return Object.getPrototypeOf(this).constructor.name;
//   }
// }

// class Triangle extends GeometricFigure {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }

//   getArea() {
//     return (this.base * this.height) / 2;
//   }
// }

// class Square extends GeometricFigure {
//   constructor(side) {
//     super();
//     this.side = side;
//   }

//   getArea() {
//     return this.side * this.side;
//   }
// }

// class Circle extends GeometricFigure {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// function handleFigures(figures) {
//   let totalArea = figures.reduce((sum, figure) => {
//     console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea());
//     return sum + figure.getArea();
//   }, 0);

//   return totalArea;
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
