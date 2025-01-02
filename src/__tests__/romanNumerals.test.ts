import convertToRomanNumerals from "@/katas/romanNumerals";

describe("get roman numerals for a given number", () => {
  it("should return I for 1", () => {
    expect(convertToRomanNumerals(1)).toBe("I");
  });

  it("should return IV for 4", () => {
    expect(convertToRomanNumerals(4)).toBe("IV");
  });

  it("should return IX for 9", () => {
    expect(convertToRomanNumerals(9)).toBe("IX");
  });

  it("should return V for 5", () => {
    expect(convertToRomanNumerals(5)).toBe("V");
  });
});
