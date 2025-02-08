
function show_weather(response){
  let temperature = document.querySelector("#temp_numb");
  let temp = Math.round(response.data.temperature.current);
  temperature.innerHTML = temp;
} 

function search_city(city){
    let apiKey = "8bb47a1aat7f98e60875f1b93o1d6a06";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(show_weather);
    
}

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search");
  let nameCity = document.querySelector("#city");
  nameCity.innerHTML = searchCity.value;
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

let currentDateELement = document.querySelector("#data");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);