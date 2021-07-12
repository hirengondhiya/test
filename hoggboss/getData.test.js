const getData = require("./getData");
const expect = require("expect");
describe("getData", () => {
  it("should return data", async () => {
    const result = await getData("/divisorInfo");
    expect(result).toBeDefined();
  });
});
