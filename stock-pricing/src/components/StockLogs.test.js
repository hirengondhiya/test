import * as redux from "react-redux";

import { render, screen } from "../test-utils";
import StockLogsContainer, { StockInfo, StockLogItem } from "./StockLogs";

const stockData = [
  { code: "abc", price: 123 },
  { code: "pqr", price: 456 },
  { code: "xyz", price: 789 },
];
const stockLogs = {
  requests: ["request2", "request1"],
  logs: {
    request1: {
      time: Date.now() - 2000,
      status: "fulfilled",
      stockData: [...stockData],
    },
    request2: {
      time: Date.now(),
      status: "pending",
    },
  },
};
test("renders stock logs container", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue(stockLogs);

  render(<StockLogsContainer />);

  const stockLogsContainerElem = screen.getByTestId("stock-logs-container");
  expect(stockLogsContainerElem).toBeInTheDocument();

  const stockLogItems = screen.getAllByTestId("stock-log-item");
  expect(stockLogItems).toHaveLength(stockLogs.requests.length);
});

test("renders stock log item with Pending status", () => {
  render(<StockLogItem status="pending" time={Date.now()} />);
  const sliElement = screen.getByTestId("stock-log-item");
  expect(sliElement).toBeInTheDocument();
  const pendingElem = screen.getByTestId("sli-pending");
  expect(pendingElem).toBeInTheDocument();
});

test("renders stock log item with Error status", () => {
  const errorMessage = "some error";
  render(
    <StockLogItem
      status="rejected"
      time={Date.now()}
      errorMessage={errorMessage}
    />
  );

  const pendingElem = screen.getByTestId("sli-error");
  expect(pendingElem).toBeInTheDocument();
  expect(pendingElem).toHaveTextContent(errorMessage);
});

test("renders stock log item with correct number of stock info items", () => {
  render(
    <StockLogItem status="fulfilled" time={Date.now()} stockData={stockData} />
  );

  const stockInfoElems = screen.getAllByTestId("stock-info");
  expect(stockInfoElems).toHaveLength(stockData.length);
});

test("renders stock info with correct information", () => {
  const stockInfo = { code: "abc", price: 123 };
  render(<StockInfo {...stockInfo} />);
  const stockInfoElem = screen.getByTestId("stock-info");
  expect(stockInfoElem).toHaveTextContent(
    `${stockInfo.code}: ${stockInfo.price}`
  );
});
