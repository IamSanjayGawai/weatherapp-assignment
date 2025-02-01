import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLastCity } from "../redux/weatherSlice";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(setLastCity(city)); // Update Redux store and localStorage
      setCity(""); // Clear the search input field
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
      />
      <SearchButton onClick={handleSearch}>
        <FaSearch />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
