
//Buttons

const searchbar = document.getElementById("search-bar");
const searchbutton = document.getElementById("search-button");

searchbar.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if(searchbar.value !="") {
      getResult(searchbar.value)
      searchbar.value=""
      }
      else {
        alert("You have to write a city name")
      }
  }
});

const setButton = () => {
if(searchbar.value !="") {
getResult(searchbar.value)
searchbar.value=""
}
else {
  alert("You have to write a city name")
}
}


searchbutton.addEventListener('click', setButton)



fetch("https://ip-geo-location.p.rapidapi.com/ip/check?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
		"x-rapidapi-key": "a72edcbfaamsh96bf1fc7aee8f23p1c27fajsn74d1a5ffa4a4"
	}
})
.then(response => {
	return response.json();
}).then(result => {
	getResult(result.city.name)
})

const url = `https://api.weatherapi.com/v1/`;
const key = `28193ed4b743490692a92524212408`;

const getResult = (sehir) => {
let query = `${url}forecast.json?key=${key}&q=${sehir}&days=3`
fetch(query).then(weather => {
  return weather.json()
})
.then(displayResult)
}




 const displayResult = (result) => {
document.getElementById("sehir-ismi").innerText = `${result.location.name}, ${result.location.country}`
if(result.forecast.forecastday.length != 0) {
// 1. Gün Detayları
document.getElementById("date-1").textContent = result.forecast.forecastday[0].date.split("-").reverse().join("-")
document.getElementById("avg-temp-1").innerText = `Avarage Temperature: ${result.forecast.forecastday[0].day.avgtemp_c}°C`
document.getElementById("max-temp-1").innerText = `Maximum Temperature: ${result.forecast.forecastday[0].day.maxtemp_c}°C`
document.getElementById("min-temp-1").innerText = `Minimum Temperature: ${result.forecast.forecastday[0].day.mintemp_c}°C`
document.getElementById("avg-humidity-1").innerText =`Avarage Humidity: %${result.forecast.forecastday[0].day.avghumidity}`
document.getElementById("max-wind-1").innerText = `Maximum Wind: ${result.forecast.forecastday[0].day.maxwind_kph} km/hour`
document.getElementById("condition-1").innerText = `${result.forecast.forecastday[0].day.condition.text}`
switch(result.forecast.forecastday[0].day.condition.text){
  case "Partly cloudy":
 document.getElementById("logo-1").src = "https://img.icons8.com/office/100/000000/partly-cloudy-day--v1.png"
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
case "Cloudy":
  document.getElementById("logo-1").src ="https://img.icons8.com/clouds/100/000000/clouds.png"
  break; 
default:
  document.getElementById("logo-1").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"
}



// 2. Gün Detayları
document.getElementById("date-2").textContent = result.forecast.forecastday[1].date.split("-").reverse().join("-")
document.getElementById("avg-temp-2").innerText = `Avarage Temperature: ${result.forecast.forecastday[1].day.avgtemp_c}°C`
document.getElementById("max-temp-2").innerText = `Maximum Temperature: ${result.forecast.forecastday[1].day.maxtemp_c}°C`
document.getElementById("min-temp-2").innerText = `Minimum Temperature: ${result.forecast.forecastday[1].day.mintemp_c}°C`
document.getElementById("avg-humidity-2").innerText =`Avarage Humidity: %${result.forecast.forecastday[1].day.avghumidity}`
document.getElementById("max-wind-2").innerText = `Maximum Wind: ${result.forecast.forecastday[1].day.maxwind_kph} km/hour`
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
case "Cloudy":
  document.getElementById("logo-2").src ="https://img.icons8.com/clouds/100/000000/clouds.png"
  break;   
default:
  document.getElementById("logo-2").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"
}


// 3. Gün Detayları
document.getElementById("date-3").textContent = result.forecast.forecastday[2].date.split("-").reverse().join("-")
document.getElementById("avg-temp-3").innerText = `Avarage Temperature: ${result.forecast.forecastday[2].day.avgtemp_c}°C`
document.getElementById("max-temp-3").innerText = `Maximum Temperature: ${result.forecast.forecastday[2].day.maxtemp_c}°C`
document.getElementById("min-temp-3").innerText = `Minimum Temperature: ${result.forecast.forecastday[2].day.mintemp_c}°C`
document.getElementById("avg-humidity-3").innerText =`Avarage Humidity: %${result.forecast.forecastday[2].day.avghumidity}`
document.getElementById("max-wind-3").innerText = `Maximum Wind: ${result.forecast.forecastday[2].day.maxwind_kph} km/hour`
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
case "Cloudy":
 document.getElementById("logo-3").src ="https://img.icons8.com/clouds/100/000000/clouds.png"
 break;   
default:
  document.getElementById("logo-3").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"
}
}
else {
  document.getElementById("date-1").textContent = "Data is not found"
  document.getElementById("date-2").textContent = "Data is not found"
  document.getElementById("date-3").textContent = "Data is not found"

  document.getElementById("avg-temp-1").innerText = ``
  document.getElementById("max-temp-1").innerText = ``
  document.getElementById("min-temp-1").innerText = ``
  document.getElementById("condition-1").innerText = ``
  document.getElementById("avg-humidity-1").innerText = ``
  document.getElementById("max-wind-1").innerText = ``
  document.getElementById("logo-1").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"

  document.getElementById("avg-temp-2").innerText = ``
  document.getElementById("max-temp-2").innerText = ``
  document.getElementById("min-temp-2").innerText = ``
  document.getElementById("condition-2").innerText = ``
  document.getElementById("avg-humidity-2").innerText = ``
  document.getElementById("max-wind-2").innerText = ``
  document.getElementById("logo-2").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"

  document.getElementById("avg-temp-3").innerText = ``
  document.getElementById("max-temp-3").innerText = ``
  document.getElementById("min-temp-3").innerText = ``
  document.getElementById("condition-3").innerText = ``
  document.getElementById("avg-humidity-3").innerText = ``
  document.getElementById("max-wind-3").innerText = ``
  document.getElementById("logo-3").src = "https://img.icons8.com/ios/100/000000/question-mark--v1.png"




}
// JSON yazdırma
console.log(result)

  }




