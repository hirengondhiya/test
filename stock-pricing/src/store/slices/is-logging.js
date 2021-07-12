import { createSlice } from "@reduxjs/toolkit";

const isLoggingStockDataSlice = createSlice({
  name: "isLoggingStockData",
  initialState: true,
  reducers: {
    toggleIsLoggingStockData: (state) => !state,
  },
});

export default isLoggingStockDataSlice.reducer;

export const { toggleIsLoggingStockData } = isLoggingStockDataSlice.actions;
