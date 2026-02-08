let inputBar = document.querySelector(".inputBar")
let searchBtn = document.querySelector(".searchBtn")
let countriesContainer = document.getElementById("countriesContainer")

async function getCountry(country){
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`

    try{
          let response = await fetch(url);
          let data = await response.json();
          
          const content = data.map(country => {
              
              return `
                  <div class="col-md-6 col-lg-4">
                      <div class="card h-100 shadow-sm">
                          <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common}" style="height: 200px; object-fit: cover;">
                          <div class="card-body">
                              <h5 class="card-title">${country.name.common}</h5>
                              <p class="card-text">
                                  <small class="text-muted">
                                      <strong>Capital:</strong> ${country.capital}<br>
                                      <strong>Region:</strong> ${country.region}<br>
                                      <strong>Population:</strong> ${country.population}<br>
                                      <strong>Area:</strong> ${country.area} km²
                                  </small>
                              </p>
                          </div>
                      </div>
                  </div>
              `
          }).join("")
          
          countriesContainer.innerHTML = content
    }
    catch(e){
        console.log(e);
        countriesContainer.innerHTML = '<div class="alert alert-danger">Country not found!</div>'
    }

    
}

function  handleSearch(){
    let value = inputBar.value

    getCountry(value);
}



searchBtn.addEventListener("click",handleSearch)

