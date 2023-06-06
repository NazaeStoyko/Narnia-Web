//Завдання  1:
const divElement = document.getElementById("test");
divElement.textContent = "Last";

//Завдання  2:

const imageElement = document.querySelector(".image");

imageElement.src = "cat.jpg";

alert(imageElement.outerHTML);

//Завдання  3:

const paragraphs = document.querySelectorAll("#text p");
paragraphs.forEach((paragraph, index) => {
  console.log(`Selector text ${index}: ${paragraph.textContent}`);
});

//Завдання  4:

const listItems = document.querySelectorAll("#list li");
alert(
  `${listItems[0].textContent}, ${
    listItems[listItems.length - 1].textContent
  }, ${listItems[1].textContent}, ${listItems[3].textContent}, ${
    listItems[2].textContent
  }`
);

//Завдання  5:

const headerElement = document.querySelector("h1");
headerElement.style.fontSize = "30px";

const divElement = document.getElementById("myDiv");
divElement.style.backgroundColor = "yellow";

const paragraphElements = document.querySelectorAll("p");
paragraphElements.forEach((paragraph) => {
  paragraph.style.fontWeight = "bold";
});

const ulElement = document.getElementById("myList");
ulElement.style.display = "flex";
ulElement.style.flexDirection = "row";

const spanElement = document.querySelector("span");
spanElement.style.display = "none";

//Завдання  6:

const message1 = prompt("Enter the first message:");
const message2 = prompt("Enter the second message:");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
input1.value = message2;
input2.value = message1;

//Завдання  7:

const mainElement = document.createElement("main");
mainElement.className = "mainClass check item";

const divElement = document.createElement("div");
divElement.id = "myDiv";

const paragraphElement = document.createElement("p");
paragraphElement.textContent = "First paragraph";

divElement.appendChild(paragraphElement);
mainElement.appendChild(divElement);

document.body.appendChild(mainElement);
