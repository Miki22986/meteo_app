//   function show_temperature(response) {
//     let temp = Math.round(response.data.temperature.current);
//     let temperature_where = document.querySelector(
//       ".current-temperature-value"
//     );
//     temperature_where.innerHTML = temp;
//   }

// function search(event) {
//   event.preventDefault();
//   let searchInputElement = document.querySelector("#search-input");
//   let cityElement = document.querySelector("#current-city");
//   cityElement.innerHTML = searchInputElement.value;
//   let apiKey = "8bb47a1aat7f98e60875f1b93o1d6a06";
//   let apiURL = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;
//   axios.get(apiURL).then(show_temperature);
// }
/*Per la data*/
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

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
  return `${formattedDay} ${hours}:${minutes}`;
}

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#data");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);