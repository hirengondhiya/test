import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { formatDate } from "../utils/shared";
function StockLogsContainer() {
  const stockLogs = useSelector((state) => state.stockLogs);
  if (
    stockLogs &&
    stockLogs.requests &&
    stockLogs.requests.length &&
    stockLogs.logs
  ) {
    const { requests, logs } = stockLogs;

    return (
      <div
        data-testid="stock-logs-container"
        style={{ maxHeight: 750, overflowY: "scroll" }}
      >
        {requests.map((requestId) => (
          <StockLogItem key={requestId} {...logs[requestId]} />
        ))}
      </div>
    );
  }
  return null;
}
StockLogsContainer.propTypes = {};

export default StockLogsContainer;

export function StockLogItem({ time, status, stockData, errorMessage }) {
  if (time && ["pending", "rejected", "fulfilled"].includes(status)) {
    return (
      <div data-testid="stock-log-item">
        <p data-testid="sli-time">{`Updates for: ${formatDate(time)}`} </p>
        {status === "pending" && <p data-testid="sli-pending">Loading...</p>}
        {status === "rejected" && <p data-testid="sli-error">{errorMessage}</p>}
        {status === "fulfilled" &&
          stockData.map((data) => (
            <StockInfo key={`${time}-${data.code}`} {...data} />
          ))}
      </div>
    );
  }
  return null;
}

StockLogItem.propTypes = {
  time: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,

  errorMessage: PropTypes.string,
  stockData: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export function StockInfo({ code, price }) {
  return <p data-testid="stock-info">{`${code}: ${price}`}</p>;
}

StockInfo.propTypes = {
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
