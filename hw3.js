"use strict";

// Создайте 4 любые математические функции 
function getDifference(Num1, Num2) {
    return Num1 - Num2;
}
getDifference(8, 7);

function getProduct(amount1, amount2) {
    return amount1 * amount2;
}
getProduct(8, 7);

function getSum(firstNum, secondNum) {
    return firstNum + secondNum;
}
getSum(8, 7);

function getQuotient(firstAmount, secondAmount) {
    if (firstAmount === 0 || secondAmount === 0) {
        return "you can not divide by 0"
    }
    return firstAmount / secondAmount;
}
getQuotient(49, 7);

// Создать 3 функции без параметров и return
function sayUserName() {
    console.log("Mary");
}
sayUserName();

function showUserName() {
    alert("Mary");
}
showUserName();

function showMessage() {
    alert("Mary");
    console.log("Mary");
}
showMessage();

// Суммы всех нечетных чисел в передаваемом числе
// Нахождение наибольшего четного числа в передаваемом числе
// Нахождения последнего нечетного числа в передаваемом числе


// Наибольшее из трех переданных чисел
function findBiggestNumber(NumberA, NumberB, NumberC) {
    if (NumberA > NumberB && NumberA > NumberC) {
        return NumberA;
    } else if (NumberB > NumberA && NumberB > NumberC) {
        return NumberB;
    } else {
        return NumberC;
    }
}
findBiggestNumber(4, 5, 8)

// Наименьшее из 5 переданных чисел
function findSmallestNumber(numberOne, numberTwo, numberThree, numberFour, numberFive) {
    if (numberOne < numberTwo && numberOne < numberThree && numberOne < numberFour && numberOne < numberFive) {
        return numberOne;
    } else if (numberTwo < numberOne && numberTwo < numberThree && numberTwo < numberFour && numberTwo < numberFive) {
        return numberTwo;
    } else if (numberThree < numberOne && numberThree < numberTwo && numberThree < numberFour && numberThree < numberFive) {
        return numberThree;
    } else if (numberFour < numberOne && numberFour < numberTwo && numberFour < numberFour && numberThree < numberFive) {
        return numberFour;
    } else {
        return numberFive;
    }
}
findSmallestNumber(4, 5, 8, 7, 14)

// Функция, которая выводит в консоль тип передаваемого параметра -строка, число и т.д
function getTypeOf(data) {
    console.log(typeof data);
}
getTypeOf("this is info")

// Функция, которая получает число дня недели и выводит в алерт Название дня
function outputDayOfTheWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
        default:
            alert("Sunday");
            break;
    }
    return alert;
}
outputDayOfTheWeek(+prompt())