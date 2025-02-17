function selectedDays (giorni){
  let days = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
  let date = new Date(giorni * 1000);

  return days[date.getDay()];
}

function get_Forecast(city) {
  let apiKey = "8bb47a1aat7f98e60875f1b93o1d6a06";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}


function displayForecast(response){
  let forecastHtml = "";

response.data.daily.forEach(function (day, index) {//chiedi a chat
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        ` <div class="giorno col-lg-2"> <b id="day"> ${selectedDays(day.time)} </b>
            <img src="${day.condition.icon_url}" class ="emoji_day">
            <div class="max_min"> 
              <b id="high_temp"> ${Math.round(day.temperature.maximum)}° </b> 
              <span id ="low_temp"> ${Math.round(day.temperature.minimum)} °</span>
            </div> 
          </div>`;
    }
  });

let weather_days = document.querySelector("#meteo_giorni");
weather_days.innerHTML = forecastHtml;

};

get_Forecast("Uzzano");