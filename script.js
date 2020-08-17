function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours > 12) {
    hours = `${hours}` - 12;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsElement = document.querySelector("#feels");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(
    (response.data.main.temp * 9) / 5 + 32
  );
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsElement.innerHTML = Math.round(
    (response.data.main.feels_like * 9) / 5 + 32
  );
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(
    response.data.wind.speed * 0.62137119223733
  );
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "64123b1ab00eb8d3e78eeb4ff0897c4b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
