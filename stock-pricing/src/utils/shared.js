import dayjs from "dayjs";

export function formatDate(dateTime) {
  return dayjs(dateTime).format("YYYY-MM-DD HH:mm:ss");
}

export function calculateStockSummary(stockSummary, stockPrice) {
  if (stockSummary) {
    const { starting, lowest, highest } = stockSummary;
    const newLow = lowest > stockPrice ? stockPrice : lowest;
    const newHigh = highest < stockPrice ? stockPrice : highest;
    return { starting, lowest: newLow, highest: newHigh, current: stockPrice };
  }

  return {
    starting: stockPrice,
    lowest: stockPrice,
    highest: stockPrice,
    current: stockPrice,
  };
}

export function calculateSummary(currentSummary, stockPrices) {
  const newSummary = stockPrices.reduce((calcSummary, stockData) => {
    const { code, price } = stockData;
    const stockSummary = calculateStockSummary(currentSummary[code], price);
    return { ...calcSummary, [code]: stockSummary };
  }, {});
  return { ...currentSummary, ...newSummary };
}
