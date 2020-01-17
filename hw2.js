"use strict";

// 0, Составить расписание на неделю. 
// Пользователь вводит порядковый номер дня недели и у него на экране отображается, те, что запланировано на этот день.
let dayOfWeek = prompt("", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
let timeSchedule = (dayOfWeek === "Monday") ? "\n8:00 work \n13:00 coffee break \n20:00 stidying \n" :
  (dayOfWeek === "Tuesday") ? "\n8:00 work \n13:00 coffee break \n20:00 stidying \n" :
  (dayOfWeek === "Wednesday") ? "\n8:00 work \n13:00 coffee break \n20:00 stidying \n" :
  (dayOfWeek === "Thursday") ? "\n8:00 work \n13:00 coffee break \n20:00 stidying \n" :
  (dayOfWeek === "Friday") ? "\n8:00 work \n13:00 coffee break \n20:00 stidying \n" :
  (dayOfWeek === "Saturday") ? "weekend" :
  (dayOfWeek === "Sunday") ? "family day" : "you don\'t choose a day";
alert(timeSchedule);

// 1
// Написать программу, вычисляющую стоимость 10 минутного междугороднего разговора в зависимости от кода города. 
let cityAreaPhoneCode = prompt();
switch (cityAreaPhoneCode) {
  case "905":
    console.log(4.14 * 10);
    break;
  case "194":
    console.log(1.98 * 10);
    break;
  case "491":
    console.log(2.69 * 10);
    break;
  case "800":
    console.log(5 * 10);
    break;
  default:
    alert("error");
}

// 2
// В переменной $min лежит число от 0 до 59. Определите в какую четверть часа попадает это число 
let min = prompt();
let quarterOfHour = (min <= 15) ? "first quarter" :
  (min >= 15 && min <= 30) ? "second quarter" :
  (min >= 30 && min <= 45) ? "third quarter" :
  (min >= 45 && min <= 60) ? "fourth quarter" :
  "error";
alert(quarterOfHour);

// 3
// $num может принимать одно из значений: 1, 2, 3 или 4. 
// Если она имеет значение '1', то в переменную $result запишем 'зима'... 
let seasonOfTheYear = prompt();
switch (seasonOfTheYear) {
  case "1":
    alert("winter");
    break;
  case "2":
    alert("summer");
    break;
  case "3":
    alert("autumn");
    break;
  case "4":
    alert("spring");
    break;
}

// 4
// площадь прямоугольника 
let squareWidth = 10;
let squareHeight = 23;
let squareSpace = squareWidth * squareHeight;
console.log(squareSpace);

// объем цилиндра
const pi = 3.1415926535;
let cylinderHeight = 10;
let cylinderBasalDiameter = 4;
let cylinderBasalRadius = 4 * 2;
let volumeOfCylinder = pi * (cylinderBasalRadius ** 2) * cylinderHeight;
console.log(volumeOfCylinder);

// Найдите гипотенузу 
let catheutusN = 3;
let catheutusM = 4;
let hypotenuseK = Math.sqrt((catheutusN ** 2) + (catheutusM ** 2))
console.log(hypotenuseK);

// Найти переплату по кредиту
let mortgageServices = 2000000;
let mortgageServicesPercent = 0.1;
let mortgageServicesPeriod = 5;
let mortgageServicesOverpayment = mortgageServices * mortgageServicesPercent * mortgageServicesPeriod;
console.log(mortgageServicesOverpayment);

// 5
//5.1 Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
let someNumberTaskFive1 = 45;
while (someNumberTaskFive1 <= 67) {
  console.log(someNumberTaskFive1);
  someNumberTaskFive1++;
}

// или
for (let someNumberTaskFive3 = 45; someNumberTaskFive3 <= 67; someNumberTaskFive3++) {
  console.log(someNumberTaskFive3);
}

//5.2 Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
let someNumberTaskFive2 = 45;
while (someNumberTaskFive2 < 67) {
  if (someNumberTaskFive2 % 10 === 0) {
    console.log(someNumberTaskFive2);
  }
  someNumberTaskFive2++;
}

// или
for (let someNumberTaskFive4 = 45; someNumberTaskFive4 < 67; someNumberTaskFive4++) {
  if (someNumberTaskFive4 % 10 === 0) {
    console.log(someNumberTaskFive4);
  }
}

// 6 Вводится натуральное число. Найти сумму четных цифр, входящих в его состав.

// 7 Калькулятор 
/*Написать программу, в которой вводятся два операнда Х и Y и знак операции (+, –, /, *). 
Вычислить результат Z в зависимости от знака. 
Предусмотреть реакции на возможный неверный знак операции, а также на ввод Y=0 при делении.
Организовать возможность многократных вычислений без перезагрузки программа (т.е. построить цикл). 
В качестве символа прекращения вычислений принять ‘0’.*/
let someNumberX = +prompt();
let someNumberY = +prompt();
let operationalSign = prompt();
let resultZ = "";
let answerMathOperation;
if (operationalSign === "*") {
  answerMathOperation = someNumberX * someNumberY;
  resultZ = someNumberX + "*" + someNumberY + "=" + answerMathOperation;
  console.log(resultZ);
}
if (operationalSign === "+") {
  answerMathOperation = someNumberX + someNumberY;
  resultZ = someNumberX + "+" + someNumberY + "=" + answerMathOperation;
  console.log(resultZ);
}
if (operationalSign === "-") {
  answerMathOperation = someNumberX - someNumberY;
  resultZ = someNumberX + "-" + someNumberY + "=" + answerMathOperation;
  console.log(resultZ);
}
if (operationalSign === "/") {
  answerMathOperation = someNumberX / someNumberY;
  resultZ = someNumberX + "/" + someNumberY + "=" + answerMathOperation;
  console.log(resultZ);
}
if (operationalSign !== "*" && operationalSign !== "+" && operationalSign !== "-" && operationalSign !== "/") {
  alert("wrong operational sign");
}

// 8 аналогично 6 Найти сумму нечетных чисел числв 255

// 9 вывести таблицу умножения на 3
let result = "";
for (let n = 1; n <= 10; n++) {
  result = 3 + " * " + n + " = " + 3 * n;
  console.log(result);
}

// 10 пользователь вводит любое целое положительное число. 
// программа суммирует все числа от 1 до введенного пользователем числа.
let sumTaskTen = 0;
let numberTaskTen = prompt();
numberTaskTen = +numberTaskTen;
for (let startNumberTaskTen = 0; startNumberTaskTen <= numberTaskTen; startNumberTaskTen++) {
  sumTaskTen += startNumberTaskTen;
}
console.log(sumTaskTen);

// 11
// Создайте программу, которая будет считывать с prompt ответ:
// Троллейбус", мы выводим в консоль "Правильно!" и выходим из цикла;
// если пользователь вводит "Сдаюсь", мы выводим в консоль "Правильный ответ: троллейбус." и выходим из цикла;
// если пользователь вводит любой другой ответ, мы выводим в консоль "Подумай еще." и продолжаем цикл.
for (let i = 1; i <= 3; i++) {
  let riddleAnswer = prompt();
  if (riddleAnswer === "Троллейбус") {
    alert("Правильно!");
    break;
  }
  if (riddleAnswer === "Сдаюсь") {
    alert("Правильный ответ: троллейбус.");
    break;
  }
  alert("Подумай еще.");
}

// Задача 12 
// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, 
// и выдаёт сумму всех нечетных чисел в этом диапазоне.
let someNumberStart = +prompt();
let someNumberEnd = +prompt();
for (; someNumberStart <= someNumberEnd; someNumberStart++) {
  if (someNumberStart % 2 === 0) {
    console.log(someNumberStart);
  }
}

// 13 Найти факториал числа
let factorialNumber = prompt();
let factorialResult = 1;
for (let numberFactor = 0; factorialNumber > numberFactor; numberFactor++) {
  factorialResult *= (factorialNumber - numberFactor);
  console.log(factorialResult);
}

// 14 , сколько будет 2 в 10 степени 
let raisingNumToTheTenthPower = 2;
for (let startRaisingToTheTenthPower = 0; startRaisingToTheTenthPower < 9; startRaisingToTheTenthPower++) {
  raisingNumToTheTenthPower *= 2;
}
console.log(raisingNumToTheTenthPower);