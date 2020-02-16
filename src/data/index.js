import axios from "axios"

const fetchWeatherData = async q => {

  console.log("CALLED", q);

  try {
    let data = await axios.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q,
        appid: process.env.VUE_APP_OPEN_WEATHER_API_KEY
      }
    })
    return {
      city: data.data.name,
      weatherDescription: data.data.weather[0].description,
      weatherIcon: getWeatherIcon(data.data.weather[0].main),
      temperature: data.data.main.temp,
      windSpeed: data.data.wind.speed,
    }
  } catch (error) {
    throw {
      city: "Oops ☹️, looks like I couldn't find that",
      weatherDescription: "",
      weatherIcon: "exclamation-triangle",
      temperature: 273.15,
      windSpeed: 0,
    }
  }
}

const getWeatherIcon = weather => {
  let weatherIcon = ""
  switch (weather) {
    case "Thunderstorm":
      weatherIcon = "bolt"
      break;
    case "Drizzle":
      weatherIcon = "cloud-rain"
      break;
    case "Rain":
      weatherIcon = "cloud-showers-heavy"
      break;
    case "Snow":
      weatherIcon = "snow-flake"
      break;
    case "Mist":
      weatherIcon = "smog"
      break;
    case "Clear":
      weatherIcon = "sun"
      break;
    case "Clouds":
      weatherIcon = "cloud"
      break;
    default:
      weatherIcon = "exclamation-triangle"
      break;
  }
  return weatherIcon
}

export default fetchWeatherData