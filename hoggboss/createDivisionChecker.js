function createDvisionChecker(divisor, message) {
  if (
    typeof divisor == "number" &&
    divisor !== 0 &&
    typeof message === "string" &&
    message.length
  ) {
    return (input) => {
      return input % divisor === 0 ? message : "";
    };
  }
  throw new Error("Incorrect Arguments", { divisor, message });
}
module.exports = createDvisionChecker;
