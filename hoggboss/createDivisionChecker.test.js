const expect = require("expect");
const createDvisionChecker = require("./createDivisionChecker");
describe("createDivisionChecker", () => {
  let divisionChecker;
  const divisor = 3;
  const output = "Hogg";
  beforeEach(() => {
    divisionChecker = createDvisionChecker(divisor, output);
  });
  it("should return a function", () => {
    expect(typeof divisionChecker).toBe("function");
  });
  it("divisionChecker should return output string when input argument is fully divisible", () => {
    const result = divisionChecker(15);
    expect(result).toBe(output);
  });
  it("divisionChecker should return empty string when input argument is not fully divisible", () => {
    const result = divisionChecker(13);
    expect(result).toBe("");
  });
  it("should throw error on incorrect argument", () => {
    expect(() => {
      createDvisionChecker(0, "Hogg");
    }).toThrow();
  });
});
