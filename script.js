
//Buttons

const searchbar = document.getElementById("search-bar");
const searchbutton = document.getElementById("search-button");



const setButton = () => {
getResult(searchbar.value)
searchbar.value="" 
}


searchbutton.addEventListener('click', setButton)



const url = `https://api.weatherapi.com/v1/`;
const key = `28193ed4b743490692a92524212408`;
let sehir = "Istanbul";



const getResult = (sehir) => {
let query = `${url}forecast.json?key=${key}&q=${sehir}&days=7`
fetch(query).then(weather => {
  return weather.json()
})
.then(displayResult)
}


 const displayResult = (result) => {
document.getElementById("sehir-ismi").innerText = `${result.location.name}, ${result.location.country}`
// 1. Gün Detayları
document.getElementById("date-1").textContent = result.forecast.forecastday[0].date
document.getElementById("avg-temp-1").innerText = `Avarage Temperature: ${result.forecast.forecastday[0].day.avgtemp_c}°C`
document.getElementById("max-temp-1").innerText = `Maximum Temperature: ${result.forecast.forecastday[0].day.maxtemp_c}°C`
document.getElementById("min-temp-1").innerText = `Minimum Temperature: ${result.forecast.forecastday[0].day.mintemp_c}°C`
document.getElementById("condition-1").innerText = `${result.forecast.forecastday[0].day.condition.text}`
switch(result.forecast.forecastday[0].day.condition.text){
  case "Partly cloudy":
 document.getElementById("logo-1").src = "https://img.icons8.com/office/100/000000/partly-cloudy-day--v1.png";
 break;
case "Patchy rain possible":
  document.getElementById("logo-1").src = "https://img.icons8.com/fluency/100/000000/partly-cloudy-rain.png"
  break;
case "Moderate rain" :
  document.getElementById("logo-1").src = "https://visualpharm.com/assets/67/Light%20Rain-595b40b65ba036ed117d2f12.svg"
  break;
case "Heavy rain" :
  document.getElementById("logo-1").src = "https://img.icons8.com/ios/100/000000/intense-rain.png"
  break;
case "Sunny":
  document.getElementById("logo-1").src = "https://img.icons8.com/emoji/100/000000/sun-emoji.png"
  break;
case "Overcast": 
  document.getElementById("logo-1").src = "https://upload.wikimedia.org/wikipedia/commons/3/35/Weather-heavy-overcast.svg"
  break;
default:
  document.getElementById("logo-1").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"
}



// 2. Gün Detayları
document.getElementById("date-2").textContent = result.forecast.forecastday[1].date
document.getElementById("avg-temp-2").innerText = `Avarage Temperature: ${result.forecast.forecastday[1].day.avgtemp_c}°C`
document.getElementById("max-temp-2").innerText = `Maximum Temperature: ${result.forecast.forecastday[1].day.maxtemp_c}°C`
document.getElementById("min-temp-2").innerText = `Minimum Temperature: ${result.forecast.forecastday[1].day.mintemp_c}°C`
document.getElementById("condition-2").innerText = `${result.forecast.forecastday[1].day.condition.text}`

switch(result.forecast.forecastday[1].day.condition.text){
  case "Partly cloudy":
 document.getElementById("logo-2").src = "https://img.icons8.com/office/100/000000/partly-cloudy-day--v1.png";
 break;
case "Patchy rain possible":
  document.getElementById("logo-2").src = "https://img.icons8.com/fluency/100/000000/partly-cloudy-rain.png"
  break;
case "Moderate rain" :
  document.getElementById("logo-2").src = "https://visualpharm.com/assets/67/Light%20Rain-595b40b65ba036ed117d2f12.svg"
  break;
case "Heavy rain" :
  document.getElementById("logo-2").src = "https://img.icons8.com/ios/100/000000/intense-rain.png"
  break;
case "Sunny":
  document.getElementById("logo-2").src = "https://img.icons8.com/emoji/100/000000/sun-emoji.png"
  break;
case "Overcast": 
  document.getElementById("logo-2").src = "https://upload.wikimedia.org/wikipedia/commons/3/35/Weather-heavy-overcast.svg"
  break;
default:
  document.getElementById("logo-2").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"
}


// 3. Gün Detayları
document.getElementById("date-3").textContent = result.forecast.forecastday[2].date
document.getElementById("avg-temp-3").innerText = `Avarage Temperature: ${result.forecast.forecastday[2].day.avgtemp_c}°C`
document.getElementById("max-temp-3").innerText = `Maximum Temperature: ${result.forecast.forecastday[2].day.maxtemp_c}°C`
document.getElementById("min-temp-3").innerText = `Minimum Temperature: ${result.forecast.forecastday[2].day.mintemp_c}°C`
document.getElementById("condition-3").innerText = `${result.forecast.forecastday[2].day.condition.text}`


switch(result.forecast.forecastday[2].day.condition.text){
  case "Partly cloudy":
 document.getElementById("logo-3").src = "https://img.icons8.com/office/100/000000/partly-cloudy-day--v1.png";
 break;
case "Patchy rain possible":
  document.getElementById("logo-3").src = "https://img.icons8.com/fluency/100/000000/partly-cloudy-rain.png"
  break;
case "Moderate rain" :
  document.getElementById("logo-3").src = "https://visualpharm.com/assets/67/Light%20Rain-595b40b65ba036ed117d2f12.svg"
  break;
case "Heavy rain" :
  document.getElementById("logo-3").src = "https://img.icons8.com/ios/100/000000/intense-rain.png"
  break;
case "Sunny":
  document.getElementById("logo-3").src = "https://img.icons8.com/emoji/100/000000/sun-emoji.png"
  break;
case "Overcast": 
  document.getElementById("logo-3").src = "https://upload.wikimedia.org/wikipedia/commons/3/35/Weather-heavy-overcast.svg"
  break;
default:
  document.getElementById("logo-3").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"
}

// JSON yazdırma
console.log(result)

  }
getResult(sehir);


