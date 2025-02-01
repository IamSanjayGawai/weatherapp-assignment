import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import ToggleUnit from "./components/ToggleUnit";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <ContentWrapper>
        <RowWrapper>
          <LeftSide>
            <Title>Weather Dashboard</Title>
          </LeftSide>
          <RightSide>
            <SearchBar />
            <ToggleUnit />
          </RightSide>
        </RowWrapper>
        <WeatherCard />
        <ForecastCard />
      </ContentWrapper>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: #f0f4f8;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  background: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 20px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.3;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;
