import config from "../conf/index.js";
console.log('from init()')
async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  const data =  fetch(config.backendEndpoint + '/cities')
    .then((res) => {
      return res.json()
    })
    .then((cityData) => {
      return cityData
    })
    .catch((err) => {
    return null
    })
  return data 
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let card = document.createElement('div')
  card.setAttribute('class', 'col-6 col-md-4 col-lg-3 mb-4')
  card.setAttribute('style', 'position: relative; padding-bottom: 20px;')
  card.innerHTML = `
    <a id="${id}" href="pages/adventures/?city=${city}">
      <div class="tile">
        <div class="tile-text text-center">
          <h5>${city}</h5>
          <p>${description}</p>
        </div>
      <img class="img-responsive" src="${image}">
      </div>
    </a>
  `;
  document.getElementById('data').appendChild(card)

}

export { init, fetchCities, addCityToDOM };
