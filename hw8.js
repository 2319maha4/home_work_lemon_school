/*Реализуйте класс Student (Студент), который будет наследовать от класса User,
класс должен иметь свойства: name (наследуется от User), surname (наследуется от User),
year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),выводит  имя и фамилию студента. +
Также класс должен иметь метод getCourse(), выводит текущий курс студента (от 1 до 5). - А ЕСЛИ БОЛЬШЕ 5, МОЖНО ИСПОЛЬЗОВАТЬ IF?
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов. 
P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.*/

// ВОПРОСЫ
// можно в синтаксисе использовать if(если значение больше 5), не может же, например, человек учиться в вузе 10 лет
// где-то я накосячила и все это не работает, пишет "Cannot read property 'getFullYear' of undefined"
class User {
    constructor(name, surname) {
        this.getFullName(name, surname)
    }
    getFullName(name, surname) {
        this.name = name
        this.surname = surname
        console.log(name + " " + surname)
    }
}
let user = new User("Maria", "Ageeva")

class Student extends User {
    constructor(name, surname, yearOfAdmission, currentYear, currentYearOfStudying) {
        super(name, surname)
        this.getCourse(yearOfAdmission, currentYear, currentYearOfStudying)
    }
    getCourse(yearOfAdmission, currentYear, currentYearOfStudying) {
        this.yearOfAdmission = yearOfAdmission
        this.currentYear = new Date()
        currentYear = currentYear.getFullYear()
        this.currentYearOfStudying = yearOfAdmission - currentYear
        console.log(currentYearOfStudying)
    }
}
let student = new Student(2010);

// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов. - НЕ ПОНИМАЮ ЧТО ДЕЛАТЬ
class Clock {
    constructor({template}){
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock({template: 'h:m:s'});
clock.start();