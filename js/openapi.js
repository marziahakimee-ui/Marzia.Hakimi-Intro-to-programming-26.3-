const weatherForm = document.getElementById("weather-form");

const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const city = document.getElementById("city").value;

  locationElement.innerText = "Searching...";
  temperatureElement.innerText = "";
  conditionElement.innerText = "";

  // First API call: find the city's latitude and longitude
  fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=" +
      encodeURIComponent(city) +
      "&count=1&language=en&format=json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data.results) {
        throw new Error("City not found");
      }

      const place = data.results[0];

      locationElement.innerText =
        "Location: " + place.name + ", " + place.country;

      // Second API call: get the weather using the coordinates
      return fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          place.latitude +
          "&longitude=" +
          place.longitude +
          "&current=temperature_2m,weather_code&temperature_unit=fahrenheit"
      );
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const currentWeather = data.current;

      temperatureElement.innerText =
        "Temperature: " + currentWeather.temperature_2m + "°F";

      conditionElement.innerText =
        "Weather code: " + currentWeather.weather_code;
    })
    .catch(function (error) {
      locationElement.innerText = "Unable to find that city.";
      console.log("Weather error:", error);
    });
});