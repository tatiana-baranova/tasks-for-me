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

function slugify(title) {
    let slug = title.split(" ").join("-");
    return slug.toLowerCase();
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

////////////////////


// Таск 2 дз"3"//

function makeArray(firstArray, secondArray, maxLength) {
    const array = firstArray.concat(secondArray);
    
    if (array.length > maxLength) {
        return array.slice(0, maxLength);
    }
    else {
        return array;
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

////////////////


// Таск 3 дз"3"//

function filterArray(numbers, value) {
    const terArray = [];
    for (const i of numbers) {
        if (i > value) {
            terArray.push(i);
        }
    }
    return terArray;
 }


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()