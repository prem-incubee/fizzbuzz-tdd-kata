import stringCalculator from "@/katas/stringCalculator";

describe("string calculator test suite", () => {
  it("returns 0 for empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("returns 7 for input string 7", () => {
    expect(stringCalculator("7")).toBe(7);
  });

  it("returns 3 for input string 1,2", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("returns 45 for input string 1,2,3,4,5,6,7,8,9", () => {
    expect(stringCalculator("1,2,3,4,5,6,7,8,9")).toBe(45);
  });

  //new line separator
  it("returns 6 for input string 1\n2,3", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });
});
