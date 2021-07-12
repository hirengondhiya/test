const divisionRunner = require("./divisionRunner");
const getData = require("./getData");
async function getResult() {
  try {
    const urls = ["/rangeInfo", "/divisorInfo"];
    const [rangeInfo, divisorInfo] = await Promise.all(
      urls.map((url) => getData(url))
    );
    const result = divisionRunner(rangeInfo, divisorInfo.outputDetails);
    return result;
  } catch (error) {
    console.error("Error in processing", { error });
  }
}
module.exports = getResult;
