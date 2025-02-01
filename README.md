# Weather Dashboard

A weather dashboard application that provides real-time weather data for any city. It allows users to search for cities, view current weather conditions, and get a 5-day forecast. The app uses **OpenWeather API** for fetching weather data and **BMCDN** for weather icons.

## Features

- **Search functionality** to search weather by city.
- **Weather data display**: Current weather with temperature, humidity, wind speed, and weather description.
- **5-day forecast**: Displays weather data for the next 5 days.
- **Dynamic weather background and icons**: Background and icons change based on the current weather condition.
- **Unit toggle**: Users can switch between Celsius and Fahrenheit.

## Project Structure
![image](https://github.com/user-attachments/assets/ed1b0ea3-44c9-48ca-b064-190dea971864)


## Technologies Used

- **React**: Frontend framework to build UI components.
- **Redux**: For state management (city, weather data, and temperature unit).
- **React Query**: For fetching and caching data from the weather API.
- **Vite**: Build tool for faster development.
- **Styled-components**: For CSS-in-JS styling.
- **BMCDN**: For weather icons.
- **OpenWeather API**: To fetch weather data.

## Approach to the Assignment
Project Setup & Environment Configuration

Initialized the project using Vite for fast performance.
Used React with Redux Toolkit for state management.
Configured a .env file to securely store the OpenWeather API key and base URL.
Fetching Weather Data

Implemented API calls using React Query for efficient data fetching and caching.
Used OpenWeather API to fetch both current weather data and 5-day forecast.
Dynamic UI & Styling

Designed a clean WeatherCard component to display city name, temperature, humidity, and wind speed.
Used BMCDN weather icons to dynamically update weather conditions.
Applied Styled Components for modular and reusable styling.
Search & Unit Toggle Functionality

Built a SearchBar component allowing users to search for cities.
Implemented a ToggleUnit button to switch between Celsius and Fahrenheit.
Enhancements & Optimizations

Implemented auto-refreshing weather data every 30 seconds using refetchInterval.
Improved error handling for API failures and invalid city searches.
Used React's useEffect to set a default city (Delhi) on initial load.


## Installation

1. **Clone the repository**:
   ```bash
    `git clone https://github.com/your-username/weather-dashboard.git`  
2. **Navigate to the project directory**

   `cd weather-dashboard`  
3. **Install dependencies**
   
        `npm install`

1. **Run App**

       `npm run dev`
    




