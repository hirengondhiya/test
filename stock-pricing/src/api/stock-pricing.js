import axios from "axios";

const stockPricingApi = axios.create({
  baseURL: "https://join.reckon.com/stock-pricing",
  timeout: 5000,
});

export async function getStockPricingData() {
  try {
    const resp = await stockPricingApi.get();
    if (resp.status < 400) {
      return resp.data;
    }
    throw new Error("Unknown response");
  } catch (err) {
    throw err;
  }
}

export default stockPricingApi;
