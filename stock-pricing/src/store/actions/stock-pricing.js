import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStockPricingData } from "../../api/stock-pricing";

export const fetchStockPricingData = createAsyncThunk(
  "fetchStockPricingData",
  async (_, { getState, dispatch }) => {
    const { isLoggingStockData } = getState();
    dispatch(fetchStockPricingDataInner({ isLoggingStockData }));
  }
);

export const fetchStockPricingDataInner = createAsyncThunk(
  "fetchStockPricingDataInner",
  async (_) => {
    return await getStockPricingData();
  }
);
