//1.Клонирование массива. Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
function isFruit() {
    let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let myBestFruits = fruits.slice(0, 5);
    console.log(myBestFruits);
}
isFruit();

//2.Преобразование массива в строку. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.
function getWeatherActivity() {
    let weatherActivity = ['Ветер', 'Дождь', 'Молния', 'Гром', 'Торнадо', 'Цунами'];
    let weatherActivityOneString1 = weatherActivity.join();
    let weatherActivityOneString2 = weatherActivity.join(', ');
    let weatherActivityOneString3 = weatherActivity.join(' + ');
    let weatherActivityOneString4 = weatherActivity.join('');
    return weatherActivityOneString2;
}
getWeatherActivity();

//3.Заполните массив 10-ю иксами с помощью цикла.
function fillArrayX() {
    let arrX = [];
    for (let arrNum = 0; arrNum < 10; arrNum++) {
        arrX[arrNum] = "x";
    }
    return arrX;
}
fillArrayX();

//4.Заполните массив числами от 1 до 10 с помощью цикла
function fillArrayY() {
    let arrY = [];
    for (let numStart = 1; numStart <= 10; numStart++) {
        arrY.push(numStart);
    }
    return arrY;
}
fillArrayY();

//5.Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
function fillArrayD() {
    let arrD = [];
    for (let numInHere = 0; numInHere < 10; numInHere++) {
        arrD.push(Math.random().toFixed(2));
    }
    return arrD;
}
fillArrayD();

//6.Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 
function fillArrayC() {
    let arrC = [];
    for (let someNumber = 0; someNumber < 10; someNumber++) {
        arrC.push(Math.round(Math.random() * 10));
    }
    return arrC;
}
fillArrayC();

//7.Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 
function getFilter() {
    let numbers = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
    let num1 = numbers.filter(number => number > 0 && number < 10);
    return num1;
}
getFilter();

//8.Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5
//Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
function getSomeElement() {
    let arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let numSomeElement = 0; numSomeElement < arrElements.length; numSomeElement++) {
        if (arrElements[numSomeElement] === 5) {
            alert('Есть!');
            break;
        }
    }
    return alert;
}
getSomeElement();

//9.Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
function getSumArraysElement() {
    let arrElements = [2, 4, 5, 8];
    arrSumElements = 0;
    for (let numForSum = 0; numForSum < arrElements.length; numForSum++) {
        arrSumElements += arrElements[numForSum];
    }
    return arrSumElements;
}
getSumArraysElement();

//10.Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 
function getSumSquares() {
    let arrNumber = [2, 4, 5, 8];
    arrSumSquares = 0;
    for (let numForSumSquares = 0; numForSumSquares < arrNumber.length; numForSumSquares++) {
        arrSumSquares += arrNumber[numForSumSquares] * arrNumber[numForSumSquares];
    }
    return arrSumSquares;
}
getSumSquares();

//11.Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)
function getArithmeticMean() {
    let arrNumbers = [2, 4, 5, 8];
    arrArithmeticMeanResult = 0;
    for (let numForArithmeticMean = 0; numForArithmeticMean < arrNumbers.length; numForArithmeticMean++) {
        arrArithmeticMeanResult += arrNumbers[numForArithmeticMean];
    }
    arrArithmeticMeanResult /= arrNumbers.length;
    return arrArithmeticMeanResult;
}
getArithmeticMean();

//12.Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), 
// которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
// const num = prompt();
// function colonOdd(num) {
//   let result = [num[0]];
//   for(let i=1; i<num.length; i++) {
//       if((num[i-1]%2 !== 0)&&(num[i]%2 !== 0)) {
//         result.push(':', num[i]);
//        }
//       else {
//         result.push(num[i]);
//       }
//   }
//   return result.join('');  
// }
// colonOdd(num);

