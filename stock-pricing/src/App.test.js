import { render, screen } from "./test-utils";
import App from "./App";
import * as stockPricingApi from "./api/stock-pricing";
import { act } from "react-dom/test-utils";

const preloadedState = {
  stockLogs: {
    requests: [],
    logs: {},
  },
  isLoggingStockData: true,
  summary: {},
};
const stockData = [
  { code: "abc", price: 123 },
  { code: "pqr", price: 456 },
  { code: "xyz", price: 789 },
];
let spy;
beforeEach(() => {
  // setup a DOM element as a render target
  spy = jest.spyOn(stockPricingApi, "getStockPricingData");
  spy.mockImplementation(async () => {
    return [...stockData];
  });
  jest.useFakeTimers();
  render(<App />, { preloadedState });
});
afterEach(() => {
  jest.useRealTimers();
});
test("renders stock pricing app", () => {
  const stockPricingElem = screen.getByTestId("stock-pricing-app");
  expect(stockPricingElem).toBeInTheDocument();
});
test("makes api call", () => {
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  expect(spy).toHaveBeenCalled();
});
test("makes api call twice", () => {
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(spy).toHaveBeenCalledTimes(2);
});
test("renders stock log items corresponding to elapsed time", () => {
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  const stockLogItems = screen.getAllByTestId("stock-log-item");
  expect(stockLogItems).toHaveLength(2);
});
