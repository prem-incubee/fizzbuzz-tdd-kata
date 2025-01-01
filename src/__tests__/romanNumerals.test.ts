import convertToRomanNumerals from "@/katas/romanNumerals";

describe("get roman numerals for a given number", () => {
  it("should return IV for 4", () => {
    expect(convertToRomanNumerals(4)).toBe("IV");
  });

  it("should return IX for 9", () => {
    expect(convertToRomanNumerals(9)).toBe("IX");
  });
});
