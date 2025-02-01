import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


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
