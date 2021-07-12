const axios = require("axios").default;
const { MAX_RETRY_COUNT } = require("./constants");
const api = axios.create({
  baseURL: "https://join.reckon.com/test1",
  timeout: 1000,
});
async function getData(url, retryCount) {
  let count = (typeof retryCount === "number" && retryCount) || MAX_RETRY_COUNT;
  while (true) {
    count--;
    try {
      const resp = await api.get(url);
      return resp.data;
    } catch (err) {
      if (count <= 0) {
        throw err;
      }
      // log error somewhere
    }
  }
}

module.exports = getData;
