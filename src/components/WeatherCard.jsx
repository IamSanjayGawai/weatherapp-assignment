import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchWeather } from "../api/weatherApi";
import styled from "styled-components";

// WeatherCard Component
const WeatherCard = () => {
  const city = useSelector((state) => state.weather.lastCity);
  const unit = useSelector((state) => state.weather.unit);

  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city, unit],
    queryFn: () => fetchWeather(city, unit),
    refetchInterval: 30000,
  });

  // Function to get appropriate weather image based on description
  const getWeatherImage = (weatherDescription) => {
    switch (weatherDescription) {
      case 'clear sky':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sun.svg";  // Clear sky icon
      case 'few clouds':
      case 'scattered clouds':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloud.svg";  // Few clouds icon
        case 'broken clouds':
            return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/broken-clouds.svg";  // Broken clouds icon
      case 'overcast clouds':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloud.svg";  // Cloudy icon
      case 'light rain':
      case 'moderate rain':
      case 'heavy rain':
      case 'shower rain':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg";  // Rain icon
      case 'snow':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg";  // Snow icon
      case 'haze':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/haze.svg";  // Haze icon
      case 'smoke':
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/smoke.svg";  // Smoke icon
      default:
        return "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloud.svg";  // Default cloudy icon
    }
  };

  // Function to get background based on weather condition
  const getWeatherBackground = (weatherDescription) => {
    switch (weatherDescription) {
      case 'clear sky':
        return "url('https://images.unsplash.com/photo-1461749280687-d7b15c8c9bc0')";  // Clear sky background
      case 'few clouds':
      case 'scattered clouds':
        return "url('https://images.unsplash.com/photo-1531880329-13bb5733a736')";  // Cloudy background
      case 'light rain':
      case 'moderate rain':
      case 'heavy rain':
      case 'shower rain':
        return "url('https://images.unsplash.com/photo-1473490130853-0a0b5a195b10')";  // Rainy background
      case 'snow':
        return "url('https://images.unsplash.com/photo-1462466353644-0ec8fd99c77b')";  // Snowy background
      case 'haze':
        return "url('https://images.unsplash.com/photo-1505275367032-e83b4ba1198f')";  // Hazy background
      case 'smoke':
        return "url('https://images.unsplash.com/photo-1505275367032-e83b4ba1198f')";  // Hazy background (same as haze)
      default:
        return "url('https://images.unsplash.com/photo-1521747116042-5b26da38fdf5')";  // Default cloudy background
    }
  };

  const cardBackground = data ? getWeatherBackground(data.weather[0].description) : '';

  const currentDate = new Date();
  const dateTime = currentDate.toLocaleString();
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });

  if (isLoading) return <Message>Loading...</Message>;
  if (error) return <Message>Error: {error.message}</Message>;
  if (!data) return <Message>Search for a city to get started.</Message>;

  return (
    <Card background={cardBackground}>
      <WeatherDetails>
        <RowLayout>
          <LeftContent>
            <WeatherIcon>
              <img
                src={getWeatherImage(data.weather[0].description)}
                alt="Weather Icon"
              />
            </WeatherIcon>
            <Description>{data.weather[0].description}</Description>
            <AdditionalInfo>
              <p>Humidity: <span>{data.main.humidity}%</span></p>
              <p>
                Wind Speed: <span> {data.wind.speed} {unit === "metric" ? "m/s" : "mph"}</span>
              </p>
            </AdditionalInfo>
          </LeftContent>
          <RightContent>
            <Location>
              <h2>{data.name}</h2>
              <p>{data.sys.country}</p>
            </Location>
            <Temperature>
              <p>
                {data.main.temp.toFixed(1)}°{unit === "metric" ? "C" : "F"}
              </p>
            </Temperature>
            <DateTime>
            <p>{dayOfWeek}, {dateTime}</p>
            </DateTime>
          </RightContent>
        </RowLayout>
      </WeatherDetails>
    </Card>
  );
};

export default WeatherCard;

// Styled Components
const Card = styled.div`
  background: ${({ background }) => background}, linear-gradient(145deg,rgb(48, 140, 233),rgb(225, 242, 252));
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  width: 80%;
  height: 300px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
  &:hover {
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const WeatherDetails = styled.div``;

const RowLayout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
 padding: 0px 70px 50px;
 
`;

const LeftContent = styled.div`
  flex: 1;
  text-align: left;
  color: white;
`;

const RightContent = styled.div`
  flex: 0 1 250px;
  text-align: right;
`;

const Location = styled.div`
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
  }
  p {
    font-size: 18px;
    color: #555;
  }
`;

const Temperature = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: #ff5722;
`;

const WeatherIcon = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  text-transform: capitalize;
  margin-top: 10px;
`;

const AdditionalInfo = styled.div`
  p {
    font-size: 30px;
    color: #fff;
    margin: 5px 0;
    font-weight: 600;
    display:flex;
    gap: 20px
    
  }
`;

const DateTime = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  font-weight: 400;
`;

const Message = styled.p`
  font-size: 18px;
  text-align: center;
  color: #888;
`;