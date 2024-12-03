/**
 * Створення та обробка проиісу
 * клас проміс
 * resolve
 * reject
 * then, catch, finally
 */


// const result = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0.5) {
//             resolve("My fulfilled");
//         } else {
//             reject("My rejected");
//         }
//     }, 2000)
// })
// // console.log(result);

// result
//     .then((data) => {
//         console.log("then", data)
//     })
//     .catch((error) => {
//         console.log("catch", error)
//     })
//     .finally(() => {
//         console.log("finally");
        
//     })

/**
 * Лaнцюжки проміса
 * декілька послідовних then
 * then повертає проміс
 */


// const promise = new Promise((resolve, reject) => {
//     resolve(5);
// })

// promise
//     .then(data => {
//         return data * 2;
//     })
//     .then(value => {
//         return value - 2;
//     })
//     .then(value => console.log(value))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log("ok");
        
//     })



// const promise = new Promise(resolve => {
//     resolve(10)
// })

// promise
//     .then((value) => {
//         return new Promise(resolve => {
//             resolve(value * 2)
//         })
//     })
//     .then(value => console.log(value))



// console.log("step 1");

// setTimeout(() => {
//     console.log("step 2");
// }, 0)

// new Promise(resolve => {
//     resolve("step 3")
// })
//     .then(data => {
//         console.log(data)
//         return "step 4"
//     })
//     .then(data => console.log(data))

// setTimeout(() => {
//     console.log("step 5");
// }, 0)


/**
 * Промісифікація:
 * проблема доступу до результату проміса з колбеком
 * функція, яка повертає проміс
 */

/**
 * функція ще не промісифікованва
 */


// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0.5) {
//             onSuccess(`Ваше замовлення ${dish}`);
//         } else {
//             onError("Закінчилися продукти")
//         }
//     }, 1000)
// }

// makeOrder(
//     "Пиріжок",
//     (str) => {
//         console.log("success", str);
//     },
//     (str) => {
//         console.log("error", str);
        
//     }
// )


/**
 * Промісифікували функцію
 * не приймає в себе колбеків
 */

// const makeOrder = (dish) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();

//         setTimeout(() => {
//             if (random > 0.5) {
//                 resolve(`Ваше замовлення ${dish}`);
//             } else {
//                 reject("Закінчилися продукти");
//             }
//         }, 1000)
//     })
// }

// makeOrder("Пиріжок")
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


/**
 * Промісифікація синхроних функцій
 * -promise.resolve()
 * -Promise.reject()
 */


// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random();

//     if (random > 0.5) {
//         onSuccess(`Ваше замовлення ${dish}`);
//         return;
//     }

//     onError("Закінчилися продукти");
// }


// makeOrder(
//     "Пиріжок",
//     (str) => {
//         console.log("success", str);
//     },
//     (str) => {
//         console.log("error", str);
        
//     }
// )


/**
 * Для синхроного коду
 */

// const makeOrder = (dish) => {
//     const random = Math.random();

//     if (random > 0.5) {
//         return Promise.resolve(`Ваше замовлення ${dish}`)
//     } else {
//         return Promise.reject("Закінчилися продукти")
//     }
// }

// makeOrder("Пиріжок")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))




///**Promise.all
// const startDate = Date.now();

// const res1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startDate;
//             resolve({ title: "first", time: deltaTime })
//         }, 3000)
//     })
// }
// const res2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startDate;
//             resolve({ title: "second", time: deltaTime })
//         }, 1000)
//     })
// }
// const res3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startDate;
//             resolve({ title: "third", time: deltaTime })
//         }, 5000)
//     })
// }


//Виконується поочереді///

// res1()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// res2()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// res3()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



//Виконується всі разом//потребує щоб всі завершилися успіхом

// Promise.all([res1(), res2(), res3()])
//     .then(date => console.log(date))
//     .catch(error => console.log(error))



//  Promise.race*/ Отримуємо той що завершився найшвидше//

// Promise.race([res1(), res2(), res3()])
//     .then(date => console.log(date))
//     .catch(error => console.log(error))




///Task//


// const startBtns = document.querySelector(".start-btn");
// const container = document.querySelector(".container");
// const result = document.querySelector(".result")

// startBtns.addEventListener("click", handleStart);

// function handleStart() {
//     result.innerHTML = "";
//     startBtns.disabled = true;
//     const promises = [...container.children].map(() => {
//         return new Promise((resolve, reject) => {

//             const random = Math.random();

//             if (random > 0.5) {
//                 resolve("🤑");
//             } else {
//                 reject("😈");
//             }
//         })
//     })

//     // console.log(promises);

//     Promise.allSettled(promises)
//         .then(items => {

//             const isWinner =
//                 items.every((item) => item.status === "fulfilled") || items.every((item) => item.status === "rejected")
            
//             items.forEach((item, i) => {
//                 container.children[i].textContent = "";

//                 setTimeout(() => {
//                     container.children[i].textContent = item.value || item.reason;

//                     if (i === items.length - 1) {
//                         result.innerHTML = isWinner ? "Winner" : "Loser";
//                         startBtns.disabled = false;
//                     }
//                 }, 1000 * (i + 1))
//             })
            
//         })
// }



// const form = document.querySelector("form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const promiseState = event.target.elements.state.value;
//     const delay = event.target.elements.delay.value;
//     console.log(delay);
// }

