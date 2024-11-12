///  Lesson 1///

// const user = {
//     userName: "Alice",
//     showThis() {
//         console.log("this", this);
//       }
// }
// user.showThis();



// Оголошенна зовнішня функція

// function showThis() {
//     console.log("this", this);
    
// }
// const user = {
//     userName: "Kate"
// }
// user.showUserThis = showThis;
// // console.log(user);
// // user.showUserThis();
// console.log(user.showUserThis);



// виклик без контексту, але оголошену як метод об'єкта

// const user = {
//     userName: "Petya",
//     showThis() {
//  console.log("this", this);
//     console.log("userName", this.userName);
//     }
// }
// // user.showThis();
// const foo = user.showThis;
// console.log(foo);


// Контекст у callback-функцію

// const user = {
//     userName: "Akice",
//     showThis() {
//         console.log("this", this);
//         console.log("userName", this.userName);
        
//     }
// }
// // user.showThis();
// function logger(callback) {
// console.log(callback);
// }

// logger(user.showThis);



// this буде window
// function foo() {
//     console.log("this", this);
// }
// foo();


// const book = {
//     title: "React",
//     showThis() {
// console.log("this", this);
//     },
//     ShowTitle() {
//         console.log("title", this.title);
//     }
// }
// book.showThis();
// const foo1 = book.showThis;
// foo1()
// const foo2 = book.ShowTitle;
// console.log(foo2);
// foo2()




//  задача по дз 1

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// задача по дз 2

// class Storage {
//     #items;
//     constructor(items) {
//     this.#items = items;
//   }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         this.#items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// задача по дз 3



// class StringBuilder  {
//     #value;

//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padBoth(str) {
//         this.#value = str += this.#value += str;
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// function showThis(a, b, arr) {
//     console.log(a, b, arr);
    
//     console.log("this", this);
// }

// const objA = {
//     a: 5,
//     b: 10
// }

// const objB = {
//     x: 100,
//     y: 150
// }
// метод call(метод функції для привязування this контексту)
// showThis.call(objA, 5, "lololo", [1, 5, 15]);

// метод apply, спосіб передавання все в одному масиві. метод функції.
// showThis.apply(objB, [10, "lolulo", [5, 10, 15]]);



// зміна кольору за допомогою привязки this контекста

// function changeColor(color) {
//     console.log("this", this);
//     this.color = color;
    
// }

// const hat = {
//     color: "black"
// }

// const sweater = {
//     color: "green"
// }

// changeColor.call(hat, "red")
// console.log("hat", hat);

// changeColor.apply(sweater, ["blue"])
// console.log(sweater);

// метод повертає з привязаним контекстом у минулому
// const changeHatColor = changeColor.bind(hat);
// changeHatColor("red")
// console.log(hat);

// const changeSweaterColor = changeColor.bind(hat);
// changeSweaterColor("red");
// console.log(hat);

// const counter = {
//     value: 0,
//     increment(num) {
//         console.log("increment", this);
//         this.value += num;
//     },
//     decrement(num) {
//         console.log("decrement", this);
//         this.value -= num;
//     }
// }

// function updateCounter(value, callback) {
//     callback(value)

// }
// // ////////////////////////////привязує і повертає
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(1, counter.decrement.bind(counter));
// console.log(counter);



// Прототипи об"єкта Object.create(animal)
//////////////////////////////////prototyp

// const animal = {
//     legs: 4
// }
// const dog = Object.create(animal);
// dog.name = "Sharik";
// console.log(dog.legs);
// console.log(dog.name);

// Визначення чія властивість, своя чи прототипа
///                               //false//
// console.log(dog.hasOwnProperty("legs"));
///                             //true//
// console.log(dog.hasOwnProperty("name"));

/////////фільтрування власних ключів
// for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }
//////коротший спосіб витягнути власну властивість
// const keys = Object.keys(dog);
// console.log(keys);


// Задача, написати програмне забезпечення для автомобілів зменшення та збільшення швидкості

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10
//         console.log(`Автомобіль ${this.brand} прискориться, швидкість ${this.speed} `);
//     },
//     decrease() {
//         if (this.speed <= 0) {
//             console.log("Авто зупинилося");
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує, швидкість ${this.speed}`);
        
//     }
// }
// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();



////////
// Створити функціонал для контролю швидкості

// const SPEED = 60;

// const bmw = {
//     brand: "bmw",
//     speed: 70
// }
// const audi = {
//     brand: "audi",
//     speed: 30
// }

// function speedSensor(maxSpeed) {
//     console.log(this);

    // через тернарний оператор////
    // return this.speed <= maxSpeed ? `Автомобіль ${this.brand} рухається з безпечною швидкістю` : `${this.brand} перевищує швидкість`

    //через if///
    // if (this.speed <= maxSpeed) {
    //     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`;
    // }
    
    // return `${this.brand} перевищує швидкість`;
// }
// console.log(speedSensor.call(bmw, SPEED));
// console.log(speedSensor.call(audi, SPEED));



// Lesson 2 //
// Клас
// class Car {
//     // приватна властивість #
//     #price;

//     static qty = 0;
//     static increment() {
//         Car.qty += 1;  //Статичний метод
//     }

//     constructor(obj = {}) {
//         this.brand = obj.brand;
//         this.modal = obj.modal;
//         this.#price = obj.price;
//         Car.increment()  ///Статичний метод класу, доступний лише класу.
//     }

//     getModel() {
//         return this.modal;
//     }
//     updatePrice() {
//         this.#price += 1000;
//     }
//     getPrice() {
//         return this.#price;
//     }

//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (this.#checkType(newPrice, "number")) {
//             this.#price = newPrice;
//             return;
//         }
//         console.log("Invalid data");
//     }

//     /////Приватний метод...(для внутрішніх взаємодій)
//     #checkType(data, type) {
//         if(typeof data !== type) {
//             return false
//         } else {
//             return true;
//         }
//     }
// }
// const bmw = new Car({
//     brand: "BMW",
//     modal: "X7",
//     price: 70000
// });
// const bmw1 = new Car({
//     brand: "BMW",
//     modal: "X7",
//     price: 65000
// });
// const bmw2 = new Car({
//     brand: "BMW",
//     modal: "X7",
//     price: 65000
// });
// // // bmw.updatePrice()
// // // console.log("bmw", bmw.getPrice());

// // console.log(bmw.price);///не ставимо при виклику get круглих дужок

// // //виклик set
// // bmw.price = 75000;
// // console.log(bmw.price);

// console.log(Car.qty);
    

// console.log();


// function result(number) {
//     return number <= 10 ? true : false;
// }
// console.log(result(55));



///////створити клас User/////
// class User {
//     #login;
//     #email;

//     constructor(obj) {
//         this.#login = obj.login;
//         this.#email = obj.email;
// }
//     get login() {
//         return this.#login;
//     }
    
//     set login(newLogin) {
//         if (!newLogin) {
//             console.log("invalid data");
//             return;
//         }
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }

// }

// const alice = new User({ login: "Alice", email: "alice@gmail.com" })

// console.log("alice", alice);

// const yura = new User({ login: "Yura", email: "yura@gmail.com" });
// console.log("yura", yura);

// yura.email = "superyura@gmail.com";
// console.log("yura", yura.email);


///приклад створення палітри кольорів///

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }
