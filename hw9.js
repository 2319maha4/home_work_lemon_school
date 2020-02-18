"use strict";
/*Создайте функцию-конструктор Calculator, который создаёт объекты с 4 методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств
min() возвращает разницу введенных свойств.*/
class Calculator {
    constructor(a, b) {
        this.read(a, b)
        this.sum(a, b)
        this.mul(a, b)
    }
    read(a, b) {
        this.a = +prompt()
        this.b = +prompt()
    }
    sum(a, b) {
        console.log(this.a + this.b)
    }
    mul(a, b) {
        console.log(this.a * this.b)
    }
}
let calculator = new Calculator();


// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id=hide;

function hideButton() {
    let container = document.querySelector(".container");
    let btn = document.querySelector(".btn");
    btn.onclick = function () {
        return container.removeChild(this);
    }
}
hideButton();

function deleteListOnButtonCkicl() {
    let container = document.querySelector(".container");
    let btn_delete = document.querySelector(".btn_delete");
    let deleteElem = document.getElementById("hide");
    btn_delete.onclick = function () {
        return container.removeChild(deleteElem);
    }
}
deleteListOnButtonCkicl();

// Сделайте список, элементы которого можно выделять кликом.
// Добавьте мульти-выделение. Если клик с нажатым Ctrl (Cmd под Mac), то элемент добавляется-удаляется из выделенных.
// Добавьте выделение промежутков. Если происходит клик с нажатым Shift, то к выделению добавляется промежуток элементов от предыдущего кликнутого до этого. При этом не важно, какое именно действие делал предыдущий клик.
let ul = document.getElementsByTagName('ul')[0];
let lastClickedLi = null;
ul.onclick = function (e) {
    e = e || event;
    let target = e.target || event.srcElement;
    if (target.tagName != "LI") return;
    let isMac = navigator.platform.indexOf("Mac") != -1;
    if (isMac ? e.metaKey : e.ctrlKey) {
        toggleSelect(target);
    } else if (e.shiftKey) {
        selectFromLast(target);
    } else {
        selectSingle(target);
    }
    lastClickedLi = target;
}
ul.onselectstart = ul.onmousedown = function () {
    return false;
}

function toggleSelect(li) {
    li.className = (li.className == '') ? 'selected' : '';
}

function selectFromLast(target) {
    let startElem = lastClickedLi || ul.children[0];
    let isLastClickedBefore = compareDocumentPosition(startElem, target) & 4;
    if (isLastClickedBefore) {
        for (let elem = startElem; elem != target; elem = elem.nextSibling) {
            elem.className = 'selected';
        }
    } else {
        for (let elem = startElem; elem != target; elem = elem.previousSibling) {
            elem.className = 'selected';
        }
    }
    elem.className = 'selected';
}

function deselectAll() {
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].className = '';
    }
}

function selectSingle(li) {
    deselectAll();
    li.className = 'selected';
}

/*
Напишите код, который запрещает прокрутку страницы при помощи мыши и клавиш.
задача переместить элемент в координаты клика мышки.
Т.е. пользователь кликает и элемент (div, например) передвигается туда
Коды клавиш, которые вызывают прокрутку:
  33, // pageUp
  34, // pageDown
  35, // end
  36, // home
  37, // left
  38, // up
  39, // right
  40  // down
*/

document.onmousewheel = document.onwheel = function () {
    return false;
};
document.addEventListener("MozMousePixelScroll",
    function () {
        return false
    }, false);
document.onkeydown = function (e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return false;
}

/*Создать класс Car 
0. Расширить его на 3 класса - GermanCar->BMW->BMWX6 (Для примера) и в каждом добавить по 1 свойству и методу
1. Добавить в класс свойство-массив (обьемы моторов) и сделать геттер-сеттер для этого свойства 
2. Обьявить конструктор в дочернем классе и переопределить родительский
3. Добавить статический метод и вызвать его ()
4. Клонировать обьект класса
5. Переопределить родительский метод
6. Расширить родительский метод - сначал вызвать его, потом добавить свой функционал
7. Добавить приватное свойство 
8. Добавить свойство только для чтения. Менять его нельзя
9. Добавить метод инкремент и декремент , которые будут плюсовать и минусовать свойство обьекта (Например год выпуска)

class Car {
    constructor(name) {
        this.name = name
    }
};

class GermanCar extends Car {
    constructor(name, color, engineCapacity) {
        super(name)
        this.color = color
        this.engineCapacity = new Array()
        engineCapacity = {
                get: function () {
                    return this.a + 1;
                }
            }
            engineCapacity = {
                set: function (x) {
                    this.a = x / 2;
                }
            }
        this.getColor
    }
    getColor {
        console.log(this.color)
    }
};

class BMW extends GermanCar {
    constructor(name, color, height) {
        super(name, color)
        this.height = height
        this.getHeight
    }
    getHeight {
        console.log(this.height)
    }
}*/