let weather_days = document.querySelector("#meteo_giorni");
let myHTML = `
    <div class="giorno">Lunedi 
        <span class ="emoji_day">⛅</span>
        <div class="max_min">
            21°<span> 8°</span>
        </div> 
    </div>`;
    
let content = ""; 

for (let i = 0; i < 5; i++) { 
    content += myHTML; 
}

weather_days.innerHTML = content;