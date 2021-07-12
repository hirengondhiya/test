const createDvisionChecker = require("./createDivisionChecker");

function divisionRunner({ lower, upper }, divisors) {
  if (
    typeof lower === "number" &&
    typeof upper === "number" &&
    Array.isArray(divisors) &&
    divisors.length
  ) {
    const divCheckers = divisors.map(({ divisor, output }) =>
      createDvisionChecker(divisor, output)
    );
    const result = [];
    for (let i = lower; i <= upper; i++) {
      result.push(
        `${i}: ${divCheckers.map((divChecker) => divChecker(i)).join("")}`
      );
    }
    return result;
  }
  throw new Error("Incorrect arguments", { lower, upper, divisors });
}

module.exports = divisionRunner;
