"use strict";

// Задача 0
let name, firstName, secondName;
var carType, carModel, carColor;
const favoriteColor = "red";
const personNationality = "german";
const birthAge = "23";

// Задача 1
let someNumber = prompt();
let oddNumber =  someNumber % 2;
if (oddNumber === 0) {
  alert("четное");
} else {
  alert("нечетное");
}

// Задача 2
let year = prompt();
let answer = (year % 4 !== 0) ? "common year" : 
(year / 100 !== 0) ? "leap year" : 
(year / 400 !== 0) ? "common year" : "leap year";
alert(answer);

// Задача 3
let numTaskThree1 = prompt();
let numTaskThree2 = prompt();
let numTaskThree3 = prompt();
if ((numTaskThree1 > numTaskThree2 && numTaskThree1 < numTaskThree3) || (numTaskThree1 < numTaskThree2 && numTaskThree1 > numTaskThree3)) {
  alert(numTaskThree1);
} else if ((numTaskThree2 > numTaskThree1 && numTaskThree2 < numTaskThree3) || (numTaskThree2 < numTaskThree1 && numTaskThree2 > numTaskThree3)) {
  alert(numTaskThree2);
} else {
  alert(numTaskThree3);
}

// Задача 4
let num1 = prompt();
let num2 = prompt();
let num3 = prompt();
if (num1 > num2 && num1 > num3) {
  alert(num1);
} else if (num2 > num3 && num2 > num1) {
  alert(num2);
} else {
  alert(num3);
}

// Задача 5
// let admin;
/*let name;
name = "john";
admin = name;
alert (admin);*/