import axios from "axios";

const API_KEY = "c516e063a9e3a21ee7b6a85dc6db716d"; // Replace with OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city, unit) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: { q: city, appid: API_KEY, units: unit },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const fetchForecast = async (city, unit) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: { q: city, appid: API_KEY, units: unit },
    });
    return response.data.list.filter((_, index) => index % 8 === 0); // Every 8th data point (~1 per day)
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
