import { createSlice } from "@reduxjs/toolkit";
import { fetchStockPricingDataInner } from "../actions/stock-pricing";
const initialState = {
  requests: [],
  logs: {},
};
export const stockLogSlice = createSlice({
  name: "stockLog",
  initialState,
  extraReducers: {
    [fetchStockPricingDataInner.pending]: (state, action) => {
      if (action.meta.arg.isLoggingStockData) {
        return {
          requests: [action.meta.requestId, ...state.requests],
          logs: {
            ...state.logs,
            [action.meta.requestId]: {
              time: Date.now(),
              status: action.meta.requestStatus,
            },
          },
        };
      }
    },
    [fetchStockPricingDataInner.fulfilled]: (state, action) => {
      if (action.meta.arg.isLoggingStockData) {
        const { requestId, requestStatus } = action.meta;
        const log = state.logs[requestId];
        return {
          requests: [...state.requests],
          logs: {
            ...state.logs,
            [requestId]: {
              time: log.time,
              status: requestStatus,
              stockData: action.payload,
            },
          },
        };
      }
    },
    [fetchStockPricingDataInner.rejected]: (state, action) => {
      if (action.meta.arg.isLoggingStockData) {
        const { requestId, requestStatus } = action.meta;
        const log = state.logs[requestId];
        return {
          requests: [...state.requests],
          logs: {
            ...state.logs,
            [requestId]: {
              time: log.time,
              status: requestStatus,
              errorMessage: action.error.message,
            },
          },
        };
      }
    },
  },
});

export default stockLogSlice.reducer;
