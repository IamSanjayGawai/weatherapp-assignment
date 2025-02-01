import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchForecast } from "../api/weatherApi";
import styled from "styled-components";

const ForecastCard = () => {
  const city = useSelector((state) => state.weather.lastCity);
  const unit = useSelector((state) => state.weather.unit);

  const { data, error } = useQuery({
    queryKey: ["forecast", city, unit],
    queryFn: () => fetchForecast(city, unit),
  });

  if (error) return null;
  if (!data) return null;

  return (
    <ForecastContainer>
      <h3>5-Day Forecast</h3>
      <ForecastList>
        {data.map((day, index) => (
          <ForecastItem key={index}>
            <p>{new Date(day.dt_txt).toDateString()}</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon" />
            <p>{day.main.temp.toFixed(1)}°{unit === "metric" ? "C" : "F"}</p>
          </ForecastItem>
        ))}
      </ForecastList>
    </ForecastContainer>
  );
};

export default ForecastCard;

const ForecastContainer = styled.div`
  margin-top: 20px;
`;

const ForecastList = styled.div`
  display: flex;
  justify-content: space-around;
    display: flex;

  gap: 30px;
`;

const ForecastItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

`;
