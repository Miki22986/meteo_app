let weather_days = document.querySelector("#meteo_giorni");
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
};

weather_days.innerHTML = content;