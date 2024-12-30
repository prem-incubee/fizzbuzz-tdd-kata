import stringCalculator from "@/katas/stringCalculator";

describe("string calculator test suite", () => {
  it("returns 0 for empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("returns 7 for input string 7", () => {
    expect(stringCalculator("7")).toBe(7);
  });
});
