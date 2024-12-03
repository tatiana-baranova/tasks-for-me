// const list = document.querySelector(".todo-list")
// // console.log(list);

// const params = new URLSearchParams({
//     _limit: 7,
//     _page: 2
// });



// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Oooops!!!");
//         }

//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data))
//     })

//     .catch((error) => {
//         list.insertAdjacentHTML("beforeend", `
//             <li>
//                 <p> ${error.message}</p>
//             </li>
//             `)
        
//     })


// function createMarkup(arr) {
//     return arr.map(({ id, title, completed }) => `<li data-id="${id}" class="list-item">
//         <input type="checkbox" ${completed} && "checked">
//         <p>${title}</p>
//     </li>
//     `).join("");
// }





// //Скорочення коду.//

// function foo(url) {
//     return fetch(url)
//         .then((response) => {
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         return response.json();
//     })
// }

// foo("https://jsonplaceholder.typicode.com/users")
//     .then(data => console.log((data)))
//     .catch(error => console.log("catch", error))





// ///Авторизація запитів з ключами///

// const API_KEY = "47418994-53b3f5e850acd57effb8c0e9d";

// const list = document.querySelector(".list");

// const params = new URLSearchParams({
//     key: API_KEY,
//     q: "red rose"
// })

// fetch(`https://pixabay.com/api/?${params}`)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         list.insertAdjacentHTML("beforeend", createMarkup(data.hits))
//     })
//     .catch(error => console.log(error))


// ///////відмалюємо зображення///

// function createMarkup(arr) {
//     return arr.map(({id, previewURL, tags}) => `
//     <li data-id="${id}">
//         <img src="${previewURL}" alt="${tags}" width="300">
//     </li>
//     `).join("");
// }


const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "60019c34a0fb4847b83214255240312";

const form = document.querySelector(".js-search-form");
const list = document.querySelector(".js-list")

form.addEventListener("submit", handlerSearch);

function handlerSearch(event) {
    event.preventDefault();

    const { city, days } = event.target.elements;

    serviceWeather(city.value, days.value)
        .then(data => {
            // console.log(data);
            list.innerHTML = createMarkup(data.forecast.forecastday)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => event.target.reset());
}

function serviceWeather(city = "", days = 1) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: city,
        days,
        lang: "uk"
    })
    
    return fetch(`${BASE_URL}/forecast.json?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
}

function createMarkup(arr) {
    return arr.map(({ date, day: { avgtemp_c, condition: { text, icon }
    } }) => `
        <li class="weather-card">
            <img src="${icon}" alt="${text}" class="weather-icon">
            <h2 class="weather-date">${date}</h2>
            <h3 class="weather-text">${text}</h3>
            <h3 class="weather-temperature">${avgtemp_c}</h3>
        </li>
`).join("");
}