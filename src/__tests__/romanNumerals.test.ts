import convertToRomanNumerals from "@/katas/romanNumerals";

describe("get roman numerals for a given number", () => {
  it("should return IV for 4", () => {
    expect(convertToRomanNumerals(4)).toBe("IV");
  });
});
