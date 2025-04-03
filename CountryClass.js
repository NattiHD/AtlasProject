import {myData} from "./API.js";

export class CountryClass {
    constructor(_name, flag, numOfPeople, capitol, lang, latlng, borders) {
        this.name = _name;
        this.flag = flag;
        this.numOfPeople = numOfPeople;
        this.capitol = capitol
        this.lang = lang;
        this.latlng = latlng;
        this.borders = borders;
    }
    //פרטים מלאים
    renderCard(container) {
        let borderDiv = ""
        if (this.borders){
            this.borders.forEach(item => {
                borderDiv += `<h2 class="btn btn-light"> <a class="borders">${item}</a></h2>`
            })
        } else {
            borderDiv = `no borders`
        }

        let lat = this.latlng[0]
        let lon = this.latlng[1]
        console.log(this.latlng)
           const div = document.createElement('div');
           div.className = "card"
           div.style.width = "18rem"
           div.innerHTML = `
                
                 <img height="200px" src= ${this.flag}
                               class="card-img-top" alt="...">
                 <div class="card-body">
                     <h1 class="card-title">${this.name}</h1>
                     <h2 class="card-text">capital: ${this.capitol}</h2>
                     <h2 class="card-text">population: ${this.numOfPeople}</h2>
                     
           
                     <h2 class="card-text">languages: ${this.lang}</h2>
                     
                 </div>
                 <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed">
                 </iframe>
                 <div class="d-grid" style="grid-template-columns: 1fr 1fr">${borderDiv}</div>
                 
             
           `
           container.appendChild(div);
        bordersClick() //קריאה לפונקציית כפתורי השכנים
    }

    //תפריט
    renderMenuCard(container) {
        const div = document.createElement('div');
        div.className = "card"
        div.style.width = "18rem"
        div.innerHTML = `
             
                 <img height="200px" src= ${this.flag}
                               class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title" >${this.name}</h5>
                 </div>
             
           `
        container.appendChild(div);
        div.addEventListener('click', (e) => {
            container.innerHTML = '';
            this.renderCard(container);
        })

    }
}

//כפתורים של שכני המדינה
 const bordersClick = () => {
    const containerCards = document.querySelector('.container-cards')
    let borders = document.querySelectorAll('.borders');
    console.log(borders)
    for (let i of borders) {
        i.addEventListener('click', (e) => {
            const country = myData.find(item => item.cca3 === i.innerHTML)
            if (country) {
                const countryCard = new CountryClass(country.name.common, country.flags.png, country.population, country.capital?.[0] || "X", Object.values(country.languages).join(" "), country.latlng, country.borders);
                containerCards.innerHTML = ''
                countryCard.renderCard(containerCards)
            }
        })
    }
}