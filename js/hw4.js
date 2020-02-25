"use strict";
// НЕ БЫЛО ПРОВЕРЕНО с 54 строки
// НЕ РАБОТАЕТ NaN - строка 169, неправильный синтаксис?

//Клонирование массива. Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
function showFruit() {
    let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let showMyBestFruits = fruits.slice(0, 5);
    console.log(showMyBestFruits);
}
showFruit();

//Преобразование массива в строку. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
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

//Заполните массив 10-ю иксами с помощью цикла.
function fillArrayX() {
    let arrX = [];
    for (let arrNum = 0; arrNum < 10; arrNum++) {
        arrX[arrNum] = "x";
    }
    return arrX;
}
fillArrayX();

//Заполните массив числами от 1 до 10 с помощью цикла
function fillArrayY() {
    let arrY = [];
    for (let numStart = 1; numStart <= 10; numStart++) {
        arrY.push(numStart);
    }
    return arrY;
}
fillArrayY();

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
function fillArrayD() {
    let arrD = [];
    for (let numInHere = 0; numInHere < 10; numInHere++) {
        arrD.push(Math.random().toFixed(2));
    }
    return arrD;
}
fillArrayD();

// НЕ БЫЛО ПРОВЕРЕНО

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 
function fillArray() {
    let arr = [];
    for (let someNumber = 0; someNumber < 10; someNumber++) {
        arr.push(Math.round(Math.random() * 10));
    }
    return arr;
}
fillArray();

//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 
function getFilter() {
    let numbers = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
    let filtredNumbers = numbers.filter(number => number > 0 && number < 10);
    return filtredNumbers;
}
getFilter();

//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5
//Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
function checkArray() {
    let arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let numSomeElement = 0; numSomeElement < arrElements.length; numSomeElement++) {
        if (arrElements[numSomeElement] === 5) {
            alert('Есть!');
            break;
        }
    }
    return alert;
}
checkArray();

//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
function getSumArraysElement() {
    let arrElements = [2, 4, 5, 8];
    arrSumElements = 0;
    for (let numForSum = 0; numForSum < arrElements.length; numForSum++) {
        arrSumElements += arrElements[numForSum];
    }
    return arrSumElements;
}
getSumArraysElement();

//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 
function getSumSquares() {
    let arrNumber = [2, 4, 5, 8];
    arrSumSquares = 0;
    for (let numForSumSquares = 0; numForSumSquares < arrNumber.length; numForSumSquares++) {
        arrSumSquares += arrNumber[numForSumSquares] * arrNumber[numForSumSquares];
    }
    return arrSumSquares;
}
getSumSquares();

//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)
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

//Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
function getFirst(array, n) {
    let firstArr = [23, 245, 6876, 32, 68, 3, 5, 90];
    let secondArr = firstArr.slice(-4);
    return secondArr;
}
getFirst();

//Сумма элементов двух массивов 
function getSumOfTwoArrays() {
    let arr1 = [2, 4, 6, 87, 9];
    let arr2 = [3, 6, 9, 12];
    let arr3 = arr1.concat(arr2);
    let sumArraysElement = 0;
    for (let numInThisFunction = 0; numInThisFunction < arr3.length; numInThisFunction++) {
        sumArraysElement += arr3[numInThisFunction];
    }
    return sumArraysElement;
}
getSumOfTwoArrays();

//Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.
function compareNumbersArray(arrInHere) {
    arrInHere = arrInHere.sort(function (a, b) {
        return a - b
    })
    console.log(arrInHere);
}
let arrToCompare = [2, 45, 56, 78, 0];
compareNumbersArray(arrToCompare);

//Напишите код, который определяет сумму и произведение значений массива.
function getSumAndProductOfArray() {
    let arrayNum1 = [2, 4, 5, 8];
    let arrayNum2 = [4, 9, 2, 1];
    let arrayNum3 = arrayNum1.concat(arrayNum2);
    let resultForSum = 0;
    let resultForProduct = 1;
    for (let startNumber = 0; startNumber < arrayNum3.length; startNumber++) {
        resultForSum += arrayNum3[startNumber];
    }
    for (let startNumber = 0; startNumber < arrayNum3.length; startNumber++) {
        resultForProduct *= arrayNum3[startNumber];
    }
    return "arrays sum =" + resultForSum + "," + "arrays product =" + resultForProduct;
}
getSumAndProductOfArray();

//Напишите функцию , которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
// НЕ РАБОТАЕТ NaN
function filterFalse() {
    arrForFilter = [NaN, 0, 77, false, -17, '', undefined, 99, null];
    let FilteredArray = arrForFilter.filter(elem => elem !== false &&
        elem !== null &&
        elem !== undefined &&
        elem !== NaN) &&
        elem !== '' &&
        elem !== 0 &&
        elem !== -0
    )

    return FilteredArray;
}
filterFalse();

//Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
function pushElements() {
    let arrToPush = ['a', 'b', 'c'];
    let newArrToPush = arrToPush.push(1, 2, 3);
    return arrToPush;
}
pushElements();

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
function unshiftElements() {
    let arrToUnshift = [1, 2, 3];
    let newArrToUnshift = arrToUnshift.unshift(4, 5, 6);
    return arrToUnshift;
}
unshiftElements();

//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
function popElement() {
    let arrayToPop = ['js', 'css', 'jq'];
    console.log(arrayToPop.pop())
}
popElement();

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
function reverseArray() {
    let arrayToReverse = [1, 2, 3];
    arrayToReverse.reverse();
    return arrayToReverse;
}
reverseArray();

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
function sliceSomeNum() {
    let arrToSliceSomeNum = [1, 2, 3, 4, 5];
    let newArrToSliceSomeNum = arrToSliceSomeNum.slice(3, 5);
    return newArrToSliceSomeNum;
}
sliceSomeNum();

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
function spliceSomeElements() {
    let arrToSplice = [1, 2, 3, 4, 5];
    let newArrToSplice = arrToSplice.splice(1, 2);
    return arrToSplice;
}
spliceSomeElements();

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
function spliceSomeElements2() {
    let arrToSplice2 = [1, 2, 3, 4, 5];
    let newArrToSplice2 = arrToSplice2.splice(0, 1);
    let newArrToSplice3 = arrToSplice2.splice(3, 1);
    return arrToSplice2;
}
spliceSomeElements2();

//Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
function showArray() {
    let arrToSchow = ['a', 'b', 'c'];
    alert(arrToSchow);
}
showArray();

// С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
function showArray1() {
    let arrToSchow1 = ['a', 'b', 'c'];
    console.log(arrToSchow1[0] + arrToSchow1[1] + arrToSchow1[2]);
}
showArray1();


//Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
function showArray1() {
    let arrayToShow = ['a', 'b', 'c', 'd'];
    alert(arrayToShow[0] + "+" + arrayToShow[1] + ', ' + arrayToShow[2] + "+" + arrayToShow[3]);
}
showArray1();

// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
obj.js[0];

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
function schowNumberFromArray() {
    let arrayInThisTask = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(arrayInThisTask[1][0]);
}
schowNumberFromArray();

// Напишите функцию generateNumbers(start, len), 
// которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.
function generateNumbers(start, len) {
    let arrToGenerate = new Array(5);
    for (let i = 0; i < len; i++, start++) {
        arrToGenerate[i] = start;
    }
    return arrToGenerate;
}
generateNumbers(1, 5);

// поменять местами
let arrayToChange = ['a', 'b', 'c', 'd'];
function change( oldArray, oldIndex , newIndex ){
  return oldArray.map(( item , index, array )=>{
    if( index === oldIndex ) return array[ newIndex ];
    else if( index === newIndex ) return array[ oldIndex ];
    else return item;
  });
}
change( arrayToChange, 0, 1 );