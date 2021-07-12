import * as redux from "react-redux";

import { render, screen } from "../test-utils";
import StockSummaryContainer, {
  StockSummary,
  SummaryItem,
} from "./StockSummary";

describe("Summary Item", () => {
  const summaryItem = {
    stock: "abc",
    starting: 10,
    lowest: 1,
    highest: 15,
    current: 12,
  };
  beforeEach(() => {
    render(
      <table>
        <tbody>
          <SummaryItem {...summaryItem} />
        </tbody>
      </table>
    );
  });
  test("renders Stock Summary Item", () => {
    const summaryElem = screen.getByTestId("stock-summary-item");
    expect(summaryElem).toBeInTheDocument();
  });
  test("renders stock name", () => {
    const stockNameElem = screen.getByTestId("ss-name");
    expect(stockNameElem).toHaveTextContent(summaryItem.stock);
  });
  test("renders stock starting price", () => {
    const stockNameElem = screen.getByTestId("ss-starting");
    expect(stockNameElem).toHaveTextContent(summaryItem.starting);
  });
  test("renders stock lowest price", () => {
    const stockNameElem = screen.getByTestId("ss-lowest");
    expect(stockNameElem).toHaveTextContent(summaryItem.lowest);
  });
  test("renders stock highest price", () => {
    const stockNameElem = screen.getByTestId("ss-highest");
    expect(stockNameElem).toHaveTextContent(summaryItem.highest);
  });
  test("renders stock current price", () => {
    const stockNameElem = screen.getByTestId("ss-current");
    expect(stockNameElem).toHaveTextContent(summaryItem.current);
  });
});

describe("StockSummary", () => {
  const stockSummaryData = [
    {
      stock: "abc",
      starting: 10,
      lowest: 1,
      highest: 19,
      current: 12,
    },
    {
      stock: "xyz",
      starting: 20,
      lowest: 2,
      highest: 29,
      current: 22,
    },
  ];

  beforeEach(() => {
    render(<StockSummary data={stockSummaryData} />);
  });
  test("renders Stock Summry element", () => {
    const stockSummaryElem = screen.getByTestId("stock-summary");
    expect(stockSummaryElem).toBeInTheDocument();
  });
  test("renders correct number of Stock Summary Items", () => {
    const stockSummeryItems = screen.getAllByTestId("stock-summary-item");
    expect(stockSummeryItems).toHaveLength(stockSummaryData.length);
  });
});

describe("StockSummaryContainer", () => {
  const summaryData = {
    abc: {
      starting: 10,
      lowest: 1,
      highest: 19,
      current: 15,
    },
    xyz: {
      starting: 20,
      lowest: 2,
      highest: 29,
      current: 25,
    },
  };
  test("renders Stock Summary", () => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue(summaryData);
    render(<StockSummaryContainer />);
    const stockSummaryElem = screen.getByTestId("stock-summary");
    expect(stockSummaryElem).toBeInTheDocument();
  });
});
