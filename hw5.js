// 5. Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
function getWordFromArray() {
    let arrToSlice = 'aaa bbb ccc';
    return arrToSlice.slice(4, 7);
}
getWordFromArray();

// 6./15. Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    let newArrayOfStrings = arrayOfStrings[2] + '/' + arrayOfStrings[1] + '/' + arrayOfStrings[0];
    return newArrayOfStrings;
}
let dateString = '2025-12-31';
let separator = '-';
splitString(dateString, separator);

// 7. Задача. Дана строка 'js'. Сделайте из нее строку 'JS'.
function getStringToUpperCase(stringToUpperCase) {
    return stringToUpperCase = stringToUpperCase.toUpperCase();
}
let stringJs = 'js';
getStringToUpperCase(stringJs);

// 8. Задача. Дана строка 'JS'. Сделайте из нее строку 'js'.
function getStringToLowerCase(stringToLowerCase) {
    return stringToLowerCase = stringToLowerCase.toLowerCase();
}
let stringJs2 = 'JS';
getStringToLowerCase(stringJs2);

// 9. Задача. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
function showLength(strLength) {
    return strLength.length;
}
let strIStudy = 'я учу javascript!';
showLength(strIStudy);

// 10./11. Задача Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
function getSlitce(strToSlice) {
    let newStrToSlice = strToSlice.slice(2, 5);
    return newStrToSlice;
}
let strIStudy2 = 'я учу javascript!';
getSlice(strIStudy2);

// 13./14. Задача Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
function getNewArray() {
    let stringIStydyJs = 'я учу javascript!'
    let firstString = stringIStydyJs.substring(0, 1);
    let secondString = stringIStydyJs.substring(2, 5);
    let thirdString = stringIStydyJs.substring(6, 17);
    return "firstString" + "=" + firstString + "," + "secondString" + "=" + secondString + "," + "thirdString" + "=" + thirdString;
}
getNewArray();

// 16. Задача Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
function getStringFromArray(arrayToString) {
    let newArrayToString = arrayToString.join("+");
    return newArrayToString;
}
let stringIStydyJs1 = ['я', 'учу', 'javascript', '!'];
getStringFromArray(stringIStydyJs1);

//12. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов 
// строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
function circumcisionc(str, n) {
    let result = (str.length > n) ? str.substr(0, n) + '...' : str;
    return result;
}

// 17. Задача Преобразуйте первую букву строки в верхний регистр.
str = 'я учу javascript!';
str = str[0].toUpperCase() + str.substr(1, str.length - 1);

// 18. Задача Преобразуйте первую букву каждого слова строки в верхний регистр.
str = 'я учу javascript!';
str = str.split(' ').map(function (item) {
    return item[0].toUpperCase() + item.substr(1, str.length - 1)
}).join(' ')

// 19. Задача Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
str = 'var_test_text';
arr = str.split('_');
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length - 1)
}
str = arr.join('');

// 20. Задача Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
function doArrayFromString(stringToArray, comma) {
    return stringToArray.trim().split(" ");
}
let stringInHere = 'И как хорош тот новый мир, где есть такие люди!';
let comma = ',';
doArrayFromString(stringInHere, comma);

// 21. Задача Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function deleteCharacters(stringToDelete, lengthStart, lengthEnd) {
    let newStringFromDeletedElements = stringToDelete.slice(lengthStart, lengthEnd);
    return newStringFromDeletedElements;
}
let stringQuotation = 'И как хорош тот новый мир, где есть такие люди!';
deleteCharacters(stringQuotation, 5, 15);

// 22. Задача Напишите функцию, которая преобразует регистр первого символа строки из нижнего регистра в верхний
function getFirstElementCapitalize(stringToCapitalize) {
    return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}
let phrase = "string not starting with capital";
getFirstElementCapitalize(phrase);

// 23. Задача Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function upperFirstLetter(stringToUpperLetter){
stringToUpperLetter = stringToUpperLetter.split(' ');
let upperText = [];
 for(let i = 0; i < stringToUpperLetter.length; i++){
let word = stringToUpperLetter[i][0].toUpperCase() + stringToUpperLetter[i].slice(1);
  upperText.push(word);
 }
   return upperText.join(" ");
}
let quotationString = "This above all: to thine own self be true..."
upperFirstLetter(quotationString);

// 24. Задача Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function changeRegister(str) {
let new_str = "";
let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    } else {
      new_str += str[i].toLowerCase();
    }
  }
  return new_str;
}
let proverStr = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"; 
changeRegister(proverStr);

// 25. Задача Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
