const expect = require("expect");
const getResult = require("./getResult");

describe("getResult", () => {
  it("should return result", async () => {
    const result = await getResult();
    expect(result).toBeDefined();
  });
});
