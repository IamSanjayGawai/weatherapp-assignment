import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../redux/weatherSlice";
import styled from "styled-components";

const ToggleUnit = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.weather.unit);

  return (
    <ToggleContainer>
      <button onClick={() => dispatch(toggleUnit())}>
        Switch to {unit === "metric" ? "Fahrenheit (°F)" : "Celsius (°C)"}
      </button>
    </ToggleContainer>
  );
};

export default ToggleUnit;

const ToggleContainer = styled.div`
  text-align: center;
  button {
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    width:250px;
    border-radius: 5px;
  }
`;
