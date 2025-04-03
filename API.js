import {CountryClass} from "./CountryClass.js";
export let myData; //משתנה סטטי לנתונים
let loading = document.querySelector('.loading');

let url = `https://restcountries.com/v3.1/all`

const init = () => {
    // showLowding()
    doAPI(url)
}

//קריאת API והפעלה
//V2
const doAPI = async (_url) => {
    showLowding()
    let resp = await fetch(_url)
    let data = await resp.json()
    console.log(data);
    myData = data
    setTimeout(()=>{
        menu(data) //הפעלת תפריט
    }, 1000)

}

//V1 קריאת API והפעלה
// const doAPIV1 = () => {
//     let url = `https://restcountries.com/v3.1/all`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             myData = data //השמה לסטטי
//             menu(data)
//
//             // showAllCards(data) // מראה את כל הכרטיסיות
//             names(data) //מציג רשימה
//         })
//         .catch(error => console.log(error))
// }

// מראה את כל הכרטיסיות לפי הפרמטר
const showAllCards = (data) => {
    const containerCards = document.querySelector('.container-cards')
    data.forEach((item) => {
        const countryCard = new CountryClass(item.name.common, item.flags.png, item.population, item.capital?.[0] || "X" ,Object.values(item.languages).join(" "), item.latlng, item.borders);
        countryCard.renderMenuCard(containerCards)

    })
}

//תפריט 5 מדינות
const menu = (data) => {
    // loading.classList.remove('hidden')
    const containerCards = document.querySelector('.container-cards')
    containerCards.innerHTML = ''
    const countiesArray = ["Israel", "United States", "France", "United Kingdom", "Thailand"];
    for (let i of countiesArray){
        const country = data.find(item => item.name.common === i)
        if (country){
            const countryCard2 = new CountryClass(country.name.common, country.flags.png, country.population, country.capital?.[0] || "X", Object.values(country.languages).join(" "), country.latlng, country.borders);
            countryCard2.renderMenuCard(containerCards)
        }
    }
}

//תפריט מדינה בלחיצה
const menuOneCuontry = (data, country) => {
    const containerCards = document.querySelector('.container-cards')
       data.forEach((item) => {
           if (item.name.common === country){
               const languagesArray = Object.values(item.languages);
               console.log(languagesArray); // ["Hebrew", "English", "Arabic"]
               console.log(item.latlng)
               const countryCard2 = new CountryClass(item.name.common, item.flags.png, item.population, item.capital?.[0] || "X", Object.values(item.languages).join(" "), item.latlng, item.borders);

               countryCard2.renderCard(containerCards)
           }
       })

}

//רשימה של המדינות לחיפוש - לא בשימוש כרגע
const names = (data) => {
    const dropMenu = document.querySelector('.dropdown-menu')
    const namesCoun = data.map((item) => {
        return `
         <li><a class="dropdown-item" href="#">${item.name.common}</a></li>
        `
    }).join("")
    dropMenu.innerHTML = namesCoun;


}

// האזנות לכפתורי הבר
const declareEvents = () => {
    //האזנה לכפתור בית
    document.querySelector('#home').addEventListener('click', (e) => {
        const containerCards = document.querySelector('.container-cards')
        containerCards.innerHTML = ''
        menu(myData)
    })

    // האזנה לשאר הכפתורים
    let all = document.querySelectorAll('.alink')
    for (let i = 0; i < all.length; i++) {
        all[i].addEventListener('click', (e) => {
            const containerCards = document.querySelector('.container-cards')
            containerCards.innerHTML = ''
            menuOneCuontry(myData, e.target.getAttribute('data-land'))
        })
    }

    //חיפוס חכם - האזנה לשורת חיפוס
    document.querySelector('#search').addEventListener('input', (e) => {
        let input = e.target.value //הערך המוקלד
        let filterData;
        filterData = myData.filter(item => {
            console.log(item)
            return item.name.common.toLowerCase().includes(input.toLowerCase())
            //חיפוס גם באותיות קטנות
        })
        const containerCards = document.querySelector('.container-cards')
        containerCards.innerHTML = ''
        console.log(filterData)
        if(filterData.length === 0){
            //כאשר אין תווים מציג תפריט
            menu(myData)
        }
        showAllCards(filterData) //כשיש תווים מציג לפי התווים
    })
}

//הצגת המתנה
const showLowding = () => {
    document.querySelector('.container-cards').innerHTML = `
        <div id="id_loading" class="loading text-center" >
            <img width="200" src="lowdingif.gif" alt="loading" > 
            <p class="display-3">Loading...</p>
        </div>
    
    `;

}

init()
// doAPI(url)////קריאת API והפעלה
declareEvents() //האזנות








