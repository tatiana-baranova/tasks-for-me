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

