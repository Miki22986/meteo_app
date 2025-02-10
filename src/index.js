
function description_weathert(response){
   let desWeather = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  desWeather.innerHTML= response.data.condition.description;
  humidity.innerHTML= response.data.temperature.humidity +"%";
  wind.innerHTML = `${response.data.wind.speed}km/h`;
}

function show_weather(response){
  let temperature = document.querySelector("#temp_numb");
  let temp = Math.round(response.data.temperature.current);
  let nameCity = document.querySelector("#city");
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#data");
  let iconElement = document.querySelector("#icon");

  nameCity.innerHTML = response.data.city;
  temperature.innerHTML = temp;
  time.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" id="icon" />`;
  description_weathert(response); 
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