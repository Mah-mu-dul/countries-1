const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => nameFinder(data))
}
loadCountries()
const nameFinder = array => {
    for (const country of array) {
        const div = document.getElementById('display')
        const display = document.createElement('h3')
        display.classList = 'items'
        
        
        display.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            <button id="details" onclick="check(${country.name})">details</button>
        `
        div.appendChild(display)
        
    }
 }
 function check(country){
     console.log(country);
 }
