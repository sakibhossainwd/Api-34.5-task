const loadCoutrys = () => {
    fetch('https://restcountries.com/v3.1/region/Africa')
    .then(res => res.json())
    .then(data => regionCountrys(data))
}

const regionCountrys = countrys => {
    const countryContainer = document.getElementById('country-container');
    countrys.forEach(country => {
        // console.log(country.altSpellings[2]);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                    <div class="card">
                        <img src="${country.flags.png}" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Name: ${country.name.common}</h5>
                          <p class="card-text">Spellings: ${country.altSpellings[2]}</p>
                        </div>
                    </div>
        </div>
        `
        countryContainer.appendChild(div);
    });
}

document.getElementById('region-list').addEventListener('click', function(){
    const regionCountry = document.getElementById('region-list');
    console.log(regionCountry);
})

loadCoutrys();