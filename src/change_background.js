function change_backgound (response){
let condition = response.data.condition.icon ;
let title = document.querySelector("#city");
let background = document.querySelector(".container");


if(condition.includes("clouds")){  
    background.className = "container nuvoloso";
    title.classList.add("bianco");
  }
if (condition =="clear-sky-day"){
   background.className = "container soleggiato";
}
 if (condition =="clear-sky-night"){
    background.className = "container notte";
    title.classList.add("bianco");
}

if(condition.includes("rain") && condition.includes("thunderstorm")) {
    background.className = "container temporale";
    title.classList.add("bianco");
}
if(condition.includes("snow")){
  background.className = "container neve";
}
if(condition.includes("mist")){
  background.className = "container nebbia";
}
}

