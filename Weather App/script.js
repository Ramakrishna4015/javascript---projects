const apiKey = "7aef08b3c7ba170e82aa1b6dbbdd0104";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=7aef08b3c7ba170e82aa1b6dbbdd0104&units=metric"
 const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}"
 ;

async function checkWeather() {
    const response = await fetch(apiUrl+ `&apiId={apiKey}`);
    var data = await response.json();
    console.log(data)




document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
checkWeather() 