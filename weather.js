

const apiKey = "5914f4f8ab9db40093bc1d61666560b8";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
const response = await fetch (apiUrl + city + `&appid=${apiKey}`);


var data = await response.json();

console.log(data)


document.querySelector(".city"). innerHTML= data.name;
document.querySelector(".temp"). innerHTML= Math.round(data.main.temp) + "°c";
document.querySelector(".humidity"). innerHTML= data.main.humidity + "%";
document.querySelector(".wind"). innerHTML= data.wind.speed + "km/hr";



 /*if (data.weather[0].main == "clouds")  
    {weatherIcon.src="Assets/cloud.png";
}

else if (data.weather[0].main == "clear")
{weatherIcon.src="Assets/clear!.png";
}

else if (data.weather[0].main == "rain")
{weatherIcon.src="Assets/raining.png";
}


else if (data.weather[0].main == "mist")
{weatherIcon.src="Assets/mists.png";
}

else if (data.weather[0].main == "drizzle")
{weatherIcon.src="Assets/drizzling.png"; 
}
*/
document.querySelector(".weather").style.display="block";

}

 searchBtn.addEventListener("click",()=>{ 
checkWeather(searchBox.value);}) 