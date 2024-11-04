// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     return totalPrice > customerCredits ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

/////////////////////////////////////////

// function formatMessage(message, maxLength) {
//     if (message.length > maxLength) {
//         return message.slice(0, maxLength) + "..."
//     } else {
//         return message;
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

///////////////////


// function checkForSpam(message) {
//     const blackListenWord1 = "spam";
//     const blackListenWord2 = "sale";
//     const normstr = message.toLowerCase();
//     if (normstr.includes(blackListenWord1) || normstr.includes(blackListenWord2))
//     {
//         return true;
//     } else {
//         return false;
//     }
// }
    
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


////////////////////


// function getShippingCost(country) {
//     switch (country) {
//         case "China": return "Shipping to China will cost 100 credits";
//         case "Chile": return "Shipping to Chile will cost 250 credits";
//         case "Australia": return "Shipping to Australia will cost 170 credits";
//         case "Jamaica": return "Shipping to Jamaica will cost 120 credits";
//         default: return "Sorry, there is no delivery to your country";
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

//////////////////


// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//     }
//     return total;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());

/////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.length * pricePerWord;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//     const text = message.split(" ");
//     const words = text.length;
//   return words * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));
//////////////////


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
//////////////////////


// Метод concat()

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// console.log(newClients);
// console.log(oldClients);
////////////////////////////


// function getSlice(array, value) {
//   const i = array.indexOf(value);
//   if (i >= 0) {
//     return array.slice(0, i+1);
//   } else {
//     return [];
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"))
///////////////////////

// function createArrayOfNumbers(min, max) {
//   const number = [];
//   for (let i = min; i <= max ; i+=1) {
//    number.push(i);
//   }
//   return number;
// }

// console.log(createArrayOfNumbers(1, 3))
// console.log(createArrayOfNumbers(14, 17))
// console.log(createArrayOfNumbers(29, 34))
// console.log(createArrayOfNumbers())


// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
////////////



// function calculateTotalPrice(order) {
//   let total = 0;
  
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
  
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// console.log(calculateTotalPrice())
/////////////////


// function getEvenNumbers(start, end) {
//   let total = [];
//   for (i = start; i <= end; i++){
//     if (i % 2 === 0) {
//     total.push(i);
//     }
//   }
//   return total;
// }
// console.log(getEvenNumbers(2, 5))
// console.log(getEvenNumbers(3, 11))
// console.log(getEvenNumbers(6, 12))
// console.log(getEvenNumbers(8, 8))
// console.log(getEvenNumbers(7, 7))
// console.log(getEvenNumbers())
////////////////////


// function checkStorage(storage, item) {
//   const lowerCaseItem = item.toLowerCase();
//   for (let i = 0; i < storage.length; i++) {
//     if (storage[i].toLowerCase() === lowerCaseItem) {
//       return `${lowerCaseItem} is available to order!`;
//     }
//   }
//   return "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"))
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"))
// console.log(checkStorage(["apple", "plum", "pear"], "pear"))
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"))
// console.log(checkStorage(["apple", "plum", "pear"], "orange"))
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"))
////////////////


// function getCommonElements(array1, array2) {
//   const total = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       total.push(array1[i]);
//     }
//   }
//   return total;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))
// console.log(getCommonElements())
//////////////////


// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let calculateTotal of order) {
//     sum += calculateTotal;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// console.log(calculateTotalPrice([]))
// console.log(calculateTotalPrice())
///////////


// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4))
// console.log(createReversedArray(164, 48, 291))
// console.log(createReversedArray(412, 371, 94, 63, 176))
// console.log(createReversedArray())
/////////////////
// for (i = array; i < maxLength; i++){

//



// Таск 1 дз"3"//

// function slugify(title) {
//     let slug = title.split(" ").join("-");
//     return slug.toLowerCase();
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// ////////////////////


// Таск 2 дз"3"//

// function makeArray(firstArray, secondArray, maxLength) {
//     const array = firstArray.concat(secondArray);
    
//     if (array.length > maxLength) {
//         return array.slice(0, maxLength);
//     }
//     else {
//         return array;
//     }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

////////////////


// Таск 3 дз"3"//

// function filterArray(numbers, value) {
//     const terArray = [];
//     for (const i of numbers) {
//         if (i > value) {
//             terArray.push(i);
//         }
//     }
//     return terArray;
//  }


// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// dz 4

// function isEnoughCapacity(products, containerSize) {
//     let sumProduct = 0;
//     for (let product of Object.values(products)) {
//         sumProduct += product;
//     }
//     return sumProduct <= containerSize;
//     }
// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true
// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false
// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true
// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false


// function calcAverageCalories(days) {
//     if (days.length === 0) return 0;
//     let sumCalories = 0;
//     for (const day of days) {
//         let total = Object.values(day)
//         sumCalories += total[1];
//     }
//     return sumCalories / days.length;
    
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270
// console.log(
//   calcAverageCalories([])
// ); // 0


// const profile = {
//     username: "Jacob",
//     playTime: 300,
  
//     changeUsername(newName) {
//         this.username = newName;
//     },
//     updatePlayTime(hours) {
//         this.playTime += hours;
//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`
//     },
// };
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"
// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"
// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"



// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks)
// console.log(booksByAuthor)
//////////


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

///////////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(bookWithTitle)
// console.log(bookByAuthor)

//////////

// const users
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
// };
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive === true);
// };

////////////
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод toSorted()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = [...books].toSorted((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// const sortedByReversedAuthorName = [...books].toSorted((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// const sortedByAscendingRating = [...books].toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// const sortedByDescentingRating = [...books].toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );


// У вас є масив об'єктів, що представляє товари в інтернет-магазині. Кожен товар містить інформацію про назву, ціну та кількість одиниць у наявності:
// const products = [
//   { name: "Laptop", price: 800, quantity: 4 },
//   { name: "Phone", price: 600, quantity: 10 },
//   { name: "Tablet", price: 450, quantity: 5 },
//   { name: "Monitor", price: 300, quantity: 8 }
// ];

// const sum = products.map(product => {
//     return {
//         name: product.name,
//         sumProd: product.price * product.quantity
//     };
// })
// console.log(sum);


// Створіть новий масив за допомогою методу map(), де кожне число збільшене на 10.
// const numbers = [5, 10, 15, 20];
// const result = numbers.map(number => {
//     return number + 10;
// })
// console.log(result)


// У вас є масив об'єктів, що представляє студентів із їхніми іменами та оцінками. Потрібно виконати два кроки:

// Вибрати студентів із високими оцінками – залишити тільки тих, у кого оцінка 80 і вище.
// Створити новий масив імен студентів, у яких високі оцінки (ті, що залишилися після фільтрації).

// const students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 76 },
//   { name: "Charlie", grade: 90 },
//   { name: "Dave", grade: 65 },
//   { name: "Eve", grade: 88 }
// ];

// const bestStudent = students.filter(student => student.grade > 80)
//     .map(student => student.name);

// console.log(bestStudent)


// У вас є масив об'єктів, що представляє товари в магазині, кожен з яких містить інформацію про назву товару, ціну та категорію. Потрібно виконати два кроки:
// Знайти всі товари в категорії "electronics", ціна яких не перевищує 300.
// Створити новий масив з назв цих товарів.

// const products = [
//   { name: "Laptop", price: 1200, category: "electronics" },
//   { name: "Smartphone", price: 800, category: "electronics" },
//   { name: "Keyboard", price: 100, category: "electronics" },
//   { name: "Headphones", price: 50, category: "electronics" },
//   { name: "Shoes", price: 150, category: "clothing" },
//   { name: "Watch", price: 200, category: "accessories" }
// ];

// const electroProduct = products.filter(product => product.category === "electronics" &&
//     product.price <= 300)
//     .map(product => product.name);

// console.log(electroProduct);



// console.log()
// console.log()
// console.log()