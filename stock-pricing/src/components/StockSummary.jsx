import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function StockSummaryContainer() {
  const stockSummaryData = useSelector((state) => state.summary);
  if (stockSummaryData) {
    const stocks = Object.keys(stockSummaryData);
    if (stocks.length) {
      const data = stocks.map((stock) => ({
        stock,
        ...stockSummaryData[stock],
      }));
      return <StockSummary data={data} />;
    }
  }
  return null;
}

export default StockSummaryContainer;

export function StockSummary({ data }) {
  if (data && data.length) {
    return (
      <table data-testid="stock-summary">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Starting</th>
            <th>Lowest</th>
            <th>Highest</th>
            <th>Current</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <SummaryItem key={row.stock} {...row} />
          ))}
        </tbody>
      </table>
    );
  }
  return null;
}

StockSummary.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      stock: PropTypes.string.isRequired,
      starting: PropTypes.number.isRequired,
      lowest: PropTypes.number.isRequired,
      highest: PropTypes.number.isRequired,
      current: PropTypes.number.isRequired,
    })
  ),
};

export function SummaryItem({ stock, starting, lowest, highest, current }) {
  return (
    <tr data-testid="stock-summary-item">
      <td data-testid="ss-name">{stock}</td>
      <td data-testid="ss-starting">{starting}</td>
      <td data-testid="ss-lowest">{lowest}</td>
      <td data-testid="ss-highest">{highest}</td>
      <td data-testid="ss-current">{current}</td>
    </tr>
  );
}
SummaryItem.propTypes = {
  stock: PropTypes.string.isRequired,
  starting: PropTypes.number.isRequired,
  lowest: PropTypes.number.isRequired,
  highest: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};
