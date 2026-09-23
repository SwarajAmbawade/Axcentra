const apiKey = "your api key";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Weather Data:", data);

      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = `${data.main.temp} °C`;
      document.getElementById("condition").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    })
    .catch(error => {
      console.error(error);
      alert("Error fetching weather data");
    });
}
