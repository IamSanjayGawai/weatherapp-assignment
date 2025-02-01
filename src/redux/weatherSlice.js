import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    lastCity: localStorage.getItem("lastCity") || "Delhi",
    unit: "metric",
  },
  reducers: {
    setLastCity: (state, action) => {
      state.lastCity = action.payload;
      localStorage.setItem("lastCity", action.payload);
    },
    toggleUnit: (state) => {
      state.unit = state.unit === "metric" ? "imperial" : "metric";
    },
  },
});

export const { setLastCity, toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
