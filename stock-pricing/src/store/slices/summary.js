import { createSlice } from "@reduxjs/toolkit";
import { calculateSummary } from "../../utils/shared";
import { fetchStockPricingDataInner } from "../actions/stock-pricing";

const initialState = {};
export const summarySlice = createSlice({
  name: "summary",
  initialState,
  extraReducers: {
    [fetchStockPricingDataInner.fulfilled]: (state, action) => {
      return calculateSummary(state, action.payload);
    },
    [fetchStockPricingDataInner.rejected]: (_, action) => {
      console.log(action.error);
    },
  },
});

export default summarySlice.reducer;
