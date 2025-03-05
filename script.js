
const API_KEY = "d2c7b0a0d9250a750245e8ebbed405b6";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById("locationInput");
const weatherBtn = document.getElementById("weatherBtn");
const weatherContainer = document.getElementById("weatherContainer");

weatherBtn.onclick = () => {
  const cityName = locationInput.value.trim();

  if (cityName) {
    fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (response.status) {
          return response.json();
        } else throw new Error("Please enter eny nex city");
      })
      .then(weatherInfo => {
        // 1. отобразить информацию о погоде (имя города, погода, описание погоды и скорость ветра)

        
        const sunriseDate = new Date(weatherInfo.sys.sunrise * 1000);
        const sunsetDate = new Date(weatherInfo.sys.sunset * 1000);

        const sunriseHauer = '0' + sunriseDate.getHours();
        const sunriseMinutes = sunriseDate.getMinutes() < 10 ? '0' + sunriseDate.getMinutes() : sunriseDate.getMinutes();
        const sunriseScend = sunriseDate.getSeconds() < 10 ? '0' + sunriseDate.getSeconds() : sunriseDate.getSeconds();

        const sunsetHauer = sunsetDate.getHours();
        const sunsetMinutes = sunsetDate.getMinutes() < 10 ? '0' + sunsetDate.getMinutes() : sunsetDate.getMinutes();
        const sunsetScend = sunsetDate.getSeconds() < 10 ? '0' + sunsetDate.getSeconds() : sunsetDate.getSeconds();

        // https://openweathermap.org/img/wn/10d@2x.png

        weatherContainer.innerHTML = `
            <div>
            <h2 class="text-body-secondary">${weatherInfo.name}</h2>
            <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt='weather' />
            </div>
            
            <p>Temperature: ${weatherInfo.main.temp.toFixed(1)} ℃</p>
            <p>Description of weather: ${weatherInfo.weather[0].description}</p>
            <p>Speed of wind: ${weatherInfo.wind.speed} m/s</p>
            <p>Sunrise: ${sunriseHauer}: ${sunriseMinutes}: ${sunriseScend}</p>
            <p>Sunset: ${sunsetHauer}: ${sunsetMinutes}: ${sunsetScend}</p>
            `;
      })
      .catch((error) => {
        weatherContainer.textContent = error;
      })
    }
}



// (git config --global init.defaultBranch main)
// für GIT, 1. Befehl (git init -> enter), 2. Befehl (git add_. -> enter), 3. (git commit -m "comment" ->)

