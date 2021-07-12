import { configureStore } from "@reduxjs/toolkit";
import stockLogReducer from "./slices/stock-log";
import isLoggingReducer from "./slices/is-logging";
import summaryReducer from "./slices/summary";
export const reducer = {
  stockLogs: stockLogReducer,
  isLoggingStockData: isLoggingReducer,
  summary: summaryReducer,
};
export default configureStore({
  reducer,
});
