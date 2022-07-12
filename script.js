// class User {
//   show(name, surn) {
//     return `${name} ${surn}`;
//   }
// }
// const user = new User();
// console.log(user.show("juhn", "smit"));
// https://github.com/bohdan-strilets?page=1&tab=repositories
// ==================================
// class Employee {
//   show(name, money) {
//     return `${name} ${money}`;
//   }
// }
// const employee1 = new Employee();
// const employee2 = new Employee();
// employee1.name = "john";
// employee1.maney = 1500;
// employee2.name = "smit";
// employee1.maney = 1700;

// console.log(employee2.show(employee1.name, employee1.maney));
// console.log(employee1.show(employee2.name, employee1.maney));

// =================================

// class User {
//   show() {
//     console.log(this.name);
//   }
//   showAge() {
//     console.log(this.age);
//   }
// }

// const user = new User();
// user.name = "Joinson";
// user.age = 31;
// console.log(user);
// user.show();
// user.showAge();

//

// class Employee {
//   showName() {
//     console.log(this.name);
//   }
//   showManey() {
//     console.log(this.maney);
//   }
// }

// const employee = new Employee();
// employee.name = "Landy";
// employee.maney = 1400;

// employee.showName();
// employee.showManey();

// console.log(employee);

// ================================================
// Задача 1⋕js.Op.Bs.MIC.1
// В объект класса Student запишите свойства name и surn.

// Задача 2⋕js.Op.Bs.MIC.2
// Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.

// Задача 3⋕js.Op.Bs.MIC.3
// Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.

// class Student {
//   name = "saha";
//   surn = "jundet";

//   show() {
//     return this.cape(this.name) + " " + this.cape(this.surn);
//   }

//   cape(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// }

// const student = new Student();
// // student.name = "saha";
// // student.surn = "jundet";
// console.log(student.show());
// console.log(student.name);
// ================================================

// class User {
//   name = "john";

//   show() {
//     return this.name;
//   }
// }

// const user = new User();
// console.log(user.name);
// ================================================

// class Employee {
//   constructor(name, maney) {
//     console.log(`${name} ${maney} hello`);
//   }
// }
// new Employee("Sasha", "5700");

// ================================================

// class User {
//   constructor(name, surn) {
//     this.name = name;
//     this.surn = surn;
//   }
//   show() {
//     return this.name + " " + this.surn;
//   }
// }

// const user = new User("Join", "Smit");

// console.log(user.show());

// class Employee {
//   constructor(name, maney) {
//     this.name = name;
//     this.surn = maney;
//   }
//   showName() {
//     return this.name;
//   }
//   showManey() {
//     return this.surn;
//   }
//   showManeyBonus() {
//     console.log(this.surn * 0.1 + this.surn);
//     // return this.surn * 0.1 + this.surn;
//   }
// }
// const employee = new Employee("Join", 2780);
// employee.showManeyBonus();

// ================================================

// Приватные свойства в ООП в JavaScript

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   show() {
//     return this.#name;
//   }
// }

// const user = new User("Sasha");

// console.log(user.show());

// class Employee {
//   #name;
//   #money;
//   #age;
//   constructor(name, money, age) {
//     this.#name = name;
//     this.#money = money;
//     this.#age = age;
//   }
//   showInfoUser() {
//     return this.#name + " " + this.#money + " " + this.#age;
//   }
// }

// const employee = new Employee("Sasha", 5700, 30);

// console.log(employee.showInfoUser());
// ================================================

// Приватные методы в ООП в JavaScript

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   show() {
//     return this.#cape(this.#name);
//   }

//   #cape(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// }

// const user = new User("sasha");
// console.log(user.show());

//

// В следующем коде сделайте вспомогательный метод приватным:
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }

//   getSalary() {
//     return this.#addSign(this.salary);
//   }

//   #addSign(num) {
//     return num + "$";
//   }
// }

// const employee = new Employee("Sasha", 5700);
// console.log(employee.getSalary());

// ================================================

// Геттеры свойств в ООП в JavaScript

// class User {
//   #name;
//   #surn;

//   constructor(name, surn) {
//     this.#name = name;
//     this.#surn = surn;
//   }

//   getName() {
//     return this.#name;
//   }

//   getSurn() {
//     return this.#surn;
//   }
// }

// const user = new User("Sasha", "Deswenimg");
// console.log(user.getName());
// console.log(user.getSurn());

//

// class Employee {
//   #name;
//   #maney;
//   #age;
//   constructor(name, maney, age) {
//     this.#name = name;
//     this.#maney = maney;
//     this.#age = age;
//   }

//   getName() {
//     return this.#name;
//   }
//   getManey() {
//     return this.#maney;
//   }
//   getAge() {
//     return this.#age;
//   }
// }

// const employee = new Employee("Sasha", 5700, 30);
// console.log(employee.name);

// class User {
//   #name;
//   #surn;

//   setName(name) {
//     if (name.length > 0) {
//       return (this.#name = name);
//     } else {
//       return "no";
//     }
//   }

//   setSurn(surn) {
//     if (surn.length > 0) {
//       return (this.#surn = surn);
//     } else {
//       return "no";
//     }
//   }

//   getName() {
//     return this.#name;
//   }

//   getSurn() {
//     return this.#surn;
//   }
// }
// let user = new User();

// console.log(user.setName("john"));
// console.log(user.setSurn("vfsvfsb"));

// class Employee {
//   #name;
//   #maney;
//   #age;

//   setAge(age) {
//     if (age > 0 && age <= 120) {
//       return (this.#age = age);
//     } else {
//       return "no";
//     }
//   }
//   setManey(num) {
//     this.#maney = num;
//     return this;
//   }

//   setName(name) {
//     this.#name = name;
//     return this;
//   }

//   getName() {
//     return this.#name;
//   }
//   getManey() {
//     return this.#maney + "$";
//   }
//   getAge() {
//     return this.#age;
//   }
// }

// const employee = new Employee();
// employee.setName("Sasha").setManey(5700).setAge(30);
// // employee.setManey(5700);
// // employee.setName("Sasha");
// // console.log(employee.getAge());
// // console.log(employee.getManey());
// console.log(employee.getName());
// console.log(employee.getManey());
// console.log(employee.getAge());

// Переберите циклом массив объектов и выведите в консоль только имена работников.
// class Student {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let users = [
//   new Student("user1"),
//   new Employee("user2"),
//   new Student("user3"),
//   new Employee("user4"),
//   new Student("user5"),
//   new Employee("user6"),
//   new Student("user7"),
// ];

// for (const elem of users) {
//   if (elem instanceof Employee) {
//     console.log(elem.name);
//   }
// }

// class ArrHelper {
//   getSum(arr) {
//     let sum = 0;
//     for (const elem of arr) {
//       sum += elem;
//     }
//     return sum;
//   }
//   getAref(arr) {
//     if (arr.length > 0) {
//       const num = this.getSum(arr);
//       return num / arr.length;
//     }
//     return 0;
//   }
// }

// const arrHelper = new ArrHelper();

// console.log(arrHelper.getSum([1, 2, 3, 4, 5, 8]));
// console.log(arrHelper.getAref([1, 2, 3, 4, 5, 8]));

// class City {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class User {
//   constructor(name, surn, city) {
//     this.name = name;
//     this.surn = surn;
//     this.city = city;
//   }
// }

// let city = new City("luis");
// let user = new User("john", "smit", city);

// console.log(user.city.name);

// класс создания работника
// class Employee {
//   constructor(name, position, department) {
//     this.name = name;
//     this.position = position;
//     this.department = department;
//   }
// }

// // класс создания пазиции работника
// class Position {
//   constructor(position) {
//     this.position = position;
//   }
// }

// // класс создания отдела работника
// class Department {
//   constructor(department) {
//     this.department = department;
//   }
// }

// // создания обьектов
// const position = new Position("Middle");
// const department = new Department("w3-431");
// const employee = new Employee(
//   "Sasha",
//   position.position,
//   department.department
// );
// console.log(employee);

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// let users = [new User("john"), new User("eric"), new User("kyle")];

// console.log(users);

// for (const elem of users) {
//   console.log(elem.getName());
// }

// class Employee {
//   #salary;
//   constructor(name, salary) {
//     this.name = name;
//     this.#salary = salary;
//   }

//   getSalary() {
//     return this.#salary;
//   }
// }

// const employee = [
//   new Employee("Sasha", 5700),
//   new Employee("Dadty", 4600),
//   new Employee("Lansy", 6300),
// ];

// for (const elem of employee) {
//   console.log(elem.name + " " + elem.getSalary());
// }

// class User {
//   #name;
//   #salary;

//   constructor(name, salary) {
//     this.#name = name;
//     this.#salary = salary;
//   }

//   getName() {
//     return this.#name;
//   }

//   getSalary() {
//     return this.#salary;
//   }
// }

// const user = [new User("Sasha", 5700), new User("Anna", 5400)];
// for (const elem of user) {
//   console.log(elem.getName() + " - " + elem.getSalary());
// }

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// class UsersCollection {
//   #users;

//   constructor() {
//     this.#users = [];
//   }
//   add(user) {
//     this.#users.push(user);
//   }
//   show() {
//     for (let user of this.#users) {
//       console.log(user.getName());
//     }
//   }
// }

// const uc = new UsersCollection();

// uc.add(new User("joes"));
// uc.add(new User("cda"));
// uc.add(new User("vsfb"));

// uc.show();

// let obj = new Object();

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);

let elem = document.querySelector("div");
let elems = elem.children;

console.dir(elems);
