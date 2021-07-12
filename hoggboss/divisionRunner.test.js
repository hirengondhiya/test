const expect = require("expect");
const divisionRunner = require("./divisionRunner");

describe("divisonRunner", () => {
  const bounds = {
    lower: 1,
    upper: 15,
  };
  const divisors = [
    {
      divisor: 3,
      output: "Boss",
    },
    {
      divisor: 5,
      output: "Hogg",
    },
  ];
  const result = divisionRunner(bounds, divisors);
  it("should return an array", () => {
    expect(Array.isArray(result)).toBe(true);
  });
  it("should return an array", () => {
    expect(Array.isArray(result)).toBe(true);
  });
  it("should match expected result", () => {
    const expectedResult = [
      "1: ",
      "2: ",
      "3: Boss",
      "4: ",
      "5: Hogg",
      "6: Boss",
      "7: ",
      "8: ",
      "9: Boss",
      "10: Hogg",
      "11: ",
      "12: Boss",
      "13: ",
      "14: ",
      "15: BossHogg",
    ];
    expect(result).toEqual(expectedResult);
  });
});
