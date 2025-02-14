function get_Forecast(city) {
  let apiKey = "8bb47a1aat7f98e60875f1b93o1d6a06";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response){
   console.log(response.data);
  let forecastHtml = "";

  response.data.daily.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` <div class="giorno"> Mon 
            <span class ="emoji_day">⛅</span>
            <div class="max_min">
                ${Math.round(day.temperature.maximum)}°  
                <span id ="low_temp"> ${Math.round(day.temperature.minimum)} °</span>
            </div> 
        </div>`;
  });

let weather_days = document.querySelector("#meteo_giorni");
weather_days.innerHTML = forecastHtml;

};

get_Forecast("Uzzano");