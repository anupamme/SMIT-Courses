let cityInput = document.getElementById("city-input");
// API key is injected via a meta tag at deploy time and must never be hardcoded here.
let apiKey = document.querySelector('meta[name="owm-api-key"]')?.content || "";

async function getWeather() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`,
  );

  let data = await response.json();
  let weatherResult = document.getElementById("weather-result");
  weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
  console.log(data);
}
