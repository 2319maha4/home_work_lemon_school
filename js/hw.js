// Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную 
// li внутри этой ul, затем вставьте эту ul в конец body.
let arr = [1, 2, 3];
let ul = document.createElement('ul');
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);

// Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    let parent = button.parentElement;
    let newInput = document.createElement('input');
    parent.appendChild(newInput);
}

// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. 
// Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
let input = document.getElementById('input');
input.addEventListener('blur', func);

function func() {
    let digits = this.value.split('');
    let parent = input.parentElement;
    for (let i = 0; i < digits.length; i++) {
        let newInput = document.createElement('input');
        newInput.value = digits[i];
        parent.appendChild(newInput);
    }
}

// Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    this.parentElement.style.display = 'none';
}

// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.clientTop);
}

// Дан элемент# elem с границами.По нажатию на кнопку выведите толщину его левой границы. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.clientLeft);
}

// Дан элемент# elem с границами.По нажатию на кнопку выведите его полную ширину с учетом границы и padding. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.offsetWidth);
}

// Дан элемент# elem с границами.По нажатию на кнопку выведите его полную высоту с учетом границы и padding. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.offsetHeight);
}

// Дан элемент# elem с границами.По нажатию на кнопку выведите его полную ширину без учета границы, но с padding. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.clientWidth);
}

// Дан элемент# elem с границами.По нажатию на кнопку выведите его полную высоту без учета границы, но с padding. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.clientHeight);
}

let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(getComputedStyle(elem).height + ' ' + getComputedStyle(elem).width);
}

//  Дан элемент# elem с вертикальной полосой прокрутки.По нажатию на кнопку выведите на сколько элемент прокручен сверху.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.scrollTop);
}

// Дан элемент# elem с горизонтальной полосой прокрутки.По нажатию на кнопку выведите на сколько элемент прокручен слева.  
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.scrollLeft);
}

//  Дан элемент# elem с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите его до позиции 100 px сверху.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    elem.scrollTop = 100;
}

// Дан элемент# elem с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите его на 100 px вниз от текущего положения. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    elem.scrollTop += 100;
}

// Дан элемент# elem с вертикальной полосой прокрутки.По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки. 

let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.scrollHeight);
}

// Дан элемент# elem с горизонтальной полосой прокрутки.По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(elem.scrollWidth);
}

// Дан элемент# elem с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите его до позиции 100 px от нижнего края элемента. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    let total_height = elem.scrollHeight;
    let needed_height = total_height - 100;
    elem.scrollTop = needed_height;
}

// Дана страница с вертикальной полосой прокрутки.По нажатию на кнопку узнайте на сколько страница прокручена по вертикали. 
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(pageYOffset);
}

// Дана страница с горизонтальной полосой прокрутки.По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали.
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    alert(pageXOffset);
}


// Дана страница с горизонтальной и вертикальной полосами прокрутки.По нажатию на кнопку прокрутите ее в точку 300 px слева, 500 px сверху. 
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    window.scrollBy(300, 500)
}

// Дана страница с вертикальной полосой прокрутки.По нажатию на кнопку прокрутите на 300 px вниз от текущего положения. 
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    window.scrollBy(0, 300)
}

// По нажатию на кнопку прокрутите страницу до самого низа. 
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    window.scrollTo(0, document.body.clientHeight);
}

// По нажатию на кнопку прокрутите страницу на 400 px от текущего положения.
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    window.scrollBy(0, 400);
}

// По нажатию на кнопку проверьте, прокручена ли страница до самого низа.Если это так - прокрутите ее в положение 100 px от верхнего края.
let button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
    let body = document.documentElement;
    if (body.scrollHeight - body.scrollTop == body.clientHeight) {
        window.scrollTo(0, 100);
    }
}

// Дан элемент# elem.По клику на него увеличьте его ширину и высоту в 2 раза.
let elem = document.getElementById('elem');
elem.addEventListener('click', func);

function func() {
    let startWidth = this.offsetWidth;
    let startHeight = this.offsetHeight;
    this.style.width = startWidth * 2 + 'px';
    this.style.height = startHeight * 2 + 'px';
}