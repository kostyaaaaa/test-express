const { multiply } = require("./utils");

it("should multiply two numbers", (done) => {
  const expected = 10;
  const result = multiply(2, 5);
  if (expected !== result) {
    throw new Error(`Expected ${expected}, but got ${result}`);
  }
  done();
});
