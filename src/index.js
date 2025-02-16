function show_city(response){
  let nameCity = document.querySelector("#city");
  nameCity.innerHTML = response.data.city;
}

function show_temperature(response){
  let temperature = document.querySelector("#temp_numb");
  let temp = Math.round(response.data.temperature.current);
  temperature.innerHTML = temp;
}

function description_weathert(response){
  let desWeather = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let description = response.data.condition.description
  let background = document.querySelector(".container");
  desWeather.innerHTML= description;
  humidity.innerHTML= response.data.temperature.humidity +"%";
  wind.innerHTML = `${response.data.wind.speed}km/h`;


  if(description == "scattered clouds"){  
    background.classList.add("nuvoloso");
  }
  // if (description =="clear sky "){
  //   background.classList.add("soleggiato");
  // }
  if (description =="clear sky"){
    background.classList.remove("nuvoloso"); 
    background.classList.add("notte");
  }
  if(description == " rain ") {
    background.classList.add("temporale");
  }
}

function show_time(response){
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#data");
  time.innerHTML = formatDate(date);
}

function show_icon(response){
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" id="icon" />`;
}

function show_weather(response){ 
  show_city(response);
  description_weathert(response);   
  show_temperature(response);
  show_time(response);
  show_icon(response);
  get_Forecast(response.data.city);
} 

function search_city(city){
    let apiKey = "8bb47a1aat7f98e60875f1b93o1d6a06";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(show_weather);
}

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search");
  search_city(searchCity.value);
}

let searchForm = document.querySelector("#city_src");
searchForm.addEventListener("submit", search);

search_city("Uzzano");
/*Per la data*/
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let mounth_day = date.getDate();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${mounth_day},  ${hours}:${minutes} `;
}