"use strict";

// 1. Дан элемент #elem. Добавьте ему класс www.
function addClassToElem() {
    let elem = document.getElementById("elem");
    return elem.classList.add("www")
}
addClassToElem();

// 2. Дан элемент #elem. Удалите у него класс www.
function deleteClassFromElem() {
    let elem = document.getElementById("elem");
    return elem.classList.remove("www")
}
deleteClassFromElem();

// 3. Дан элемент #elem. Проверьте наличие у него класса www.
function checkIfElemHasClass() {
    let elem = document.getElementById("elem");
    return elem.classList.contains("www")
}
checkIfElemHasClass();

// 4. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
function deleteOrAddClassToElem(){
    let elem = document.getElementById("elem");
    return elem.classList.toggle("www");
}
deleteOrAddClassToElem();

// 5. Дан элемент #elem. Узнайте количество его классов.
function getClassQuantiyOfTheElem(){
    let elem = document.getElementById("elem");
    let lenght =  elem.classList.length;
    return lenght;
}
getClassQuantiyOfTheElem();

// 6. Дан элемент #elem. Выведите последовательно алертом его классы.
function schowClassOfElem(){
    let elem6 = document.getElementById("list");
    let className = elem.classList;
    let lenght2 = elem.classList.lenght;
    for(let i = 0; i >= lenght2; i++){
        alert(className[i]); 
    } 
}
schowClassOfElem();

// 7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
function addCssDiv() {
    return document.getElementById("square")
        .style.cssText += "width:300px; height:300px; background-color:pink; font-size:55px; border:2px dashed green;"
};
addCssDiv();

// 8. Дан элемент #elem. По клику на него выведите название его тега.
// 9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
function showTagNameOnClick(){
    let elem = document.getElementById("square");
    let tag = elem.tagName.toLocaleLowerCase();
    let event = elem.addEventListener("click", function(){alert(tag)})
    return event;
};
showTagNameOnClick();

// 10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
function addTagToElemClass(){
    let elem = document.getElementById("elem");
    let tag = elem.tagName.toLocaleLowerCase();
    return elem.classList.add(tag);
}
addTagToElemClass();

// 11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.
function addTextToTagLi(){
    let elem = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = "пункт";
    return elem.appendChild(li);
    }
addTextToTagLi();

// 12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
function addLiWithArrayToUl() {
    let elem = document.getElementById('listul');
    let array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = array[i];
         elem.appendChild(li);
    }
    return elem;
};
addLiWithArrayToUl();

// 13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
// Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
// НЕ РАБОТАЕТ
function addLiToUl(arr) {
    let ul = document.getElementById("listul");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
            }
   li.addEventListener("click", function () {
        alert(li.innerHTML);
    })
    ul.appendChild(li);
    return ul;
};
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
addLiToUl(week);

// 14. Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
function addNewLi(){
let ul = document.getElementById("task14");
let liElem = document.getElementById("li2");
let li = document.createElement("li");
li.innerHTML = "!!!";
ul.insertBefore(li, liElem);
return ul;
}
addNewLi();

// 15. Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
function addSpanText() {
    let body = document.getElementById("body");
    let elem = document.getElementById("task14");
    let span = document.createElement("span");
    span.innerHTML = "!!!";
    body.insertBefore(span, elem);
    return body;
}
addSpanText();

// 16. Дан элемент #elem. Вставьте после него span с текстом '!!!'.
function addSpanAfterElem(){
    let elem = document.getElementById("task14");
    let span = document.createElement("span");
    span.innerHTML = "111";
    elem.insertAdjacentElement("afterEnd", span);
    return elem;
}
addSpanAfterElem();

// 19.	Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
function changeStyle(){
    let elem = document.getElementById("task14");
    return elem.firstElementChild.style.color = 'red';
}
changeStyle();

// 21.	Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
function changeCssStyleElemsChild(){
let elem = document.getElementById("task14");
for(let i = 0;i<elem.children.length;i++){
    elem.children[i].innerHTML += '!';
    }
    return elem;
}
changeCssStyleElemsChild();

// 23.	Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
function addTextToSiblingElem(){
    let elem = document.getElementById("li2")
    let sibling = elem.nextElementSibling;
    return sibling.innerHTML += "!";
}
addTextToSiblingElem();

// 26.	Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
function changeColorOnParent(){
    let elem = document.getElementById("li2");
     return elem.parentElement.parentElement.style.color = "red"
}
changeColorOnParent();
