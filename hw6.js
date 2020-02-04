// "use strict";

// // 1. Дан элемент #elem. Добавьте ему класс www.
// function addClassToElem() {
//     let elem = document.getElementById("elem");
//     return elem.classList.add("www")
// }
// addClassToElem();

// // 2. Дан элемент #elem. Удалите у него класс www.
// function deleteClassFromElem() {
//     let elem = document.getElementById("elem");
//     return elem.classList.remove("www")
// }
// deleteClassFromElem();

// // 3. Дан элемент #elem. Проверьте наличие у него класса www.
// function checkIfElemHasClass() {
//     let elem = document.getElementById("elem");
//     return elem.classList.contains("www")
// }
// checkIfElemHasClass();

// // 4. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
// function deleteOrAddClassToElem(){
//     let elem = document.getElementById("elem");
//     return elem.classList.toggle("www");
// }
// deleteOrAddClassToElem();

// // 5. Дан элемент #elem. Узнайте количество его классов.
// function getClassQuantiyOfTheElem(){
//     let elem = document.getElementById("elem");
//     let lenght =  elem.classList.length;
//     return lenght;
// }
// getClassQuantiyOfTheElem();

// // 6. Дан элемент #elem. Выведите последовательно алертом его классы.
// function schowClassOfElem(){
//     let elem6 = document.getElementById("list");
//     let className = elem.classList;
//     let lenght2 = elem.classList.lenght;
//     for(let i = 0; i >= lenght2; i++){
//         alert(className[i]); 
//     } 
// }
// schowClassOfElem();

// // 7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
// function addCssDiv() {
//     return document.getElementById("square")
//         .style.cssText += "width:300px; height:300px; background-color:pink; font-size:55px; border:2px dashed green;"
// };
// addCssDiv();

// // 8. Дан элемент #elem. По клику на него выведите название его тега.
// // 9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
// function showTagNameOnClick(){
//     let elem = document.getElementById("square");
//     let tag = elem.tagName.toLocaleLowerCase();
//     let event = elem.addEventListener("click", function(){alert(tag)})
//     return event;
// };
// showTagNameOnClick();

// // 10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
// function addTagToElemClass(){
//     let elem = document.getElementById("elem");
//     let tag = elem.tagName.toLocaleLowerCase();
//     return elem.classList.add(tag);
// }
// addTagToElemClass();

// // 11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.
// function addTextToTagLi(){
//     let elem = document.getElementById("list");
//     let li = document.createElement("li");
//     li.innerHTML = "пункт";
//     return elem.appendChild(li);
//     }
// addTextToTagLi();

// // 12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// function addLiWithArrayToUl() {
//     let elem = document.getElementById('listul');
//     let array = [1, 2, 3, 4, 5];
//     for (let i = 0; i < array.length; i++) {
//         let li = document.createElement('li');
//         li.innerHTML = array[i];
//          elem.appendChild(li);
//     }
//     return elem;
// };
// addLiWithArrayToUl();
