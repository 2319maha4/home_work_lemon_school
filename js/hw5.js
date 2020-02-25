"use strict";
// есть вопросы к неработающим функциям - 27, 34, 40, 41.

// 1. Палиндром
function isPalindrome(str) {
  str = str.toLowerCase();
  let strReverse = str.split('').reverse().join('');
  if (strReverse === str) {
    return 'yes';
  } else {
    return 'no';
  }
}
let userName = "Anna";
isPalindrome(userName);

// 4. Фибоначчи
function getFibonacciNum(n) {
  return n <= 1 ? n : getFibonacciNum(n - 1) + getFibonacciNum(n - 2);
}
getFibonacciNum(5);
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// 5. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
function getWordFromArray() {
  let arrToSlice = 'aaa bbb ccc';
  return arrToSlice.slice(4, 7);
}
getWordFromArray();

// 6./15. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
function splitString(stringToSplit, separator) {
  let arrayOfStrings = stringToSplit.split(separator);
  let newArrayOfStrings = arrayOfStrings[2] + '/' + arrayOfStrings[1] + '/' + arrayOfStrings[0];
  return newArrayOfStrings;
}
let dateString = '2025-12-31';
let separator = '-';
splitString(dateString, separator);

// 7. Дана строка 'js'. Сделайте из нее строку 'JS'.
function getStringToUpperCase(stringToUpperCase) {
  return stringToUpperCase = stringToUpperCase.toUpperCase();
}
let stringJs = 'js';
getStringToUpperCase(stringJs);

// 8. Дана строка 'JS'. Сделайте из нее строку 'js'.
function getStringToLowerCase(stringToLowerCase) {
  return stringToLowerCase = stringToLowerCase.toLowerCase();
}
let stringJs2 = 'JS';
getStringToLowerCase(stringJs2);

// 9. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
function showLength(strLength) {
  return strLength.length;
}
let strIStudy = 'я учу javascript!';
showLength(strIStudy);

// 10./11. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
function getSlice(strToSlice) {
  let newStrToSlice = strToSlice.slice(2, 5);
  return newStrToSlice;
}
let strIStudy2 = 'я учу javascript!';
getSlice(strIStudy2);

//12. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов 
// строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
function shortenTheText(str, n) {
  let result = (str.length > n) ? str.substr(0, n) + '...' : str;
  return result;
}
let longStr = "It might be possible to shorten the text somewhat";
shortenTheText(longStr, 7);

// 13./14. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
function getNewArray() {
  let stringIStydyJs = 'я учу javascript!'
  let firstString = stringIStydyJs.substring(0, 1);
  let secondString = stringIStydyJs.substring(2, 5);
  let thirdString = stringIStydyJs.substring(6, 17);
  return "firstString" + "=" + firstString + "," + "secondString" + "=" + secondString + "," + "thirdString" + "=" + thirdString;
}
getNewArray();

// 16. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
function getStringFromArray(arrayToString) {
  let newArrayToString = arrayToString.join("+");
  return newArrayToString;
}
let stringIStydyJs1 = ['я', 'учу', 'javascript', '!'];
getStringFromArray(stringIStydyJs1);

// 17.  Преобразуйте первую букву строки в верхний регистр.
function getToUpperCase(str) {
  return str[0].toUpperCase() + str.substr(1, str.length - 1);
}
getToUpperCase('я учу javascript!');

// 18.  Преобразуйте первую букву каждого слова строки в верхний регистр.
str = 'я учу javascript!';
str = str.split(' ').map(function (item) {
  return item[0].toUpperCase() + item.substr(1, str.length - 1)
}).join(' ')

// 19.  Преобразуйте строку 'let_test_text' в 'letTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
str = 'let_test_text';
arr = str.split('_');
for (let i = 1; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length - 1)
}
str = arr.join('');

// 20.  Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
function doArrayFromString(stringToArray, comma) {
  return stringToArray.trim().split(" ");
}
let stringInHere = 'И как хорош тот новый мир, где есть такие люди!';
let comma = ',';
doArrayFromString(stringInHere, comma);

// 21.  Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function deleteCharacters(stringToDelete, lengthStart, lengthEnd) {
  let newStringFromDeletedElements = stringToDelete.slice(lengthStart, lengthEnd);
  return newStringFromDeletedElements;
}
let stringQuotation = 'И как хорош тот новый мир, где есть такие люди!';
deleteCharacters(stringQuotation, 5, 15);

// 22.  Напишите функцию, которая преобразует регистр первого символа строки из нижнего регистра в верхний
function getFirstElementCapitalize(stringToCapitalize) {
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}
let phrase = "string not starting with capital";
getFirstElementCapitalize(phrase);

// 23.  Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function upperFirstLetter(stringToUpperLetter) {
  stringToUpperLetter = stringToUpperLetter.split(' ');
  let upperText = [];
  for (let i = 0; i < stringToUpperLetter.length; i++) {
    let word = stringToUpperLetter[i][0].toUpperCase() + stringToUpperLetter[i].slice(1);
    upperText.push(word);
  }
  return upperText.join(" ");
}
let quotationString = "This above all: to thine own self be true..."
upperFirstLetter(quotationString);

// 24.  Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. 
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

// 26. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое 
// значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
function fillWithZero(num, len, sign) {
  let zerosLen = len - (num + '').length, // к-во нулей
    zeroNum = '';
  for (; zerosLen > 0; zerosLen--) {
    zeroNum += 0;
  }
  return sign + zeroNum + num + '';
}
fillWithZero(3478, 12, "+");

// 27./ 41. Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск 
// подстроки str2 в строкеstr1 без учёта регистра символов.
// НЕ РАБОТАЕТ
function searchMatch(str1, str2) {
  str1 = str1.toLowerCase;
  str2 = str2.toLowerCase;
  // str2 = new RegExp(str2, "ig");
  let midstring = str1.match(str2);
  return (midstring !== -1) ? "Соответствует" : "Не соответствует";
}
let js = "I love JavaScript";
let js2 = "javascript";
searchMatch(js, js2);

// 29. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
function repeatString(str, num) {
  newStr = str.repeat(num);
  return newStr;
}
let js = " I love JavaScript";
repeatString(js, 3);

// 30. Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
let pathname = "/home/user/dir/file.txt";

function returnPathName(pathname) {
  let name = pathname.split("/").pop();
  return name;
}
returnPathName(pathname);

// 33. Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
function cutString(str, n) {
  let result = [];
  for (let i = 0; i < str.length; i += n) {
    result.push(str.substr(i, n));
  }
  return result;
}
cutString("Соответствует", 4);

//34. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function countStringsCharacters(str, symb) {
  for (let count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));
  return count;
}
let string = "Астрономия это наука о небесных объектах";
countStringsCharacters(string, "а");
// почему с var работает, а с let - нет?
function countStringsCharacters(str, symb) {
  for (var count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));
  return count;
}
let string = "Астрономия это наука о небесных объектах";
countStringsCharacters(string, "а");

// 36. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function deleteSpace(str) {
  return str.trim();
}
let someStr = " Max is a good boy    ";
deleteSpace(someStr);

// 38. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n) {
  return str.split(" ").splice(0, n).join(" ");
}
cutString("Max is a good boy", 5);

// 39. Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы
function getUniqueString(str) {
  str = str.split('');
  let uniqueString = str.filter(function (value, i, str) {
    return str.lastIndexOf(value) === str.indexOf(value);
  });
  return uniqueString;
}
getUniqueString('paparazzi');

// 40. Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов
// НЕ РАБОТАЕТ
function getUniqueString(str) {
  str = str.split('');
  let result = [];
  for(let i = 0; i < str.length ; i++) {
      if(result.indexOf(str[i]) == -1) result.push(str[i]);
  }
return result = result.join("");
}
getUniqueString("get get new unique string string");

// 42. Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ строки в указанной позиции. 
function isUpperCase(str, index) {
  return str.charAt(index).toUpperCase() === str.charAt(index);
}
isUpperCase("Harder to breathe", 7);

// 43. Напишите функцию, которая принимает на вход строку, а возвращает эту строку «задом наперед»
function reverseString(str) {
  return str.toLowerCase().split("").reverse().join("")
}
reverseString("Anacondaz");