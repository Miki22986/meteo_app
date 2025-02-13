function meteo_futuro(city) {
  let apiKey = "8bb47a1aat7f98e60875f1b93o1d6a06";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(){
   
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let content = ""; 

    for (let i = 0; i < 5; i++) { 
        let day = days[i];
        let myHTML = `
        <div class="giorno">${day} 
            <span class ="emoji_day">⛅</span>
            <div class="max_min">
                21°<span> 8°</span>
            </div> 
        </div>`;
        content += myHTML;
    }
};

let weather_days = document.querySelector("#meteo_giorni");
weather_days.innerHTML = content;