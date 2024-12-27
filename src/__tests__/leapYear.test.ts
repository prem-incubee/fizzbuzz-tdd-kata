import isLeapYear from "@/katas/leapYear";

describe("Leap year determination in isLeapYear", () => {

  it("should return true for a leap year 2008", () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  it("should return true for a leap year 1996", () => {
    expect(isLeapYear(1996)).toBe(true);
  });

  it("should return true for a leap year 2012", () => {
    expect(isLeapYear(2012)).toBe(true);
  });

  it("should return true for a leap year 2016", () => {
    expect(isLeapYear(2016)).toBe(true);
  });

  it("should return true for a leap year 1608", () => {
    expect(isLeapYear(1608)).toBe(true);
  });

  it("should return false for a common year 1997", () => {
    expect(isLeapYear(1997)).toBe(false);
  });

  it.todo("should return false for a common year 2017");
  it.todo("should return false for a common year 2003");
  it.todo("should return false for a common year 1975");

  it.todo("should return true for a leap year 1600");
  it.todo("should return true for a leap year 2000");

  it.todo("should return false for a common year 1700");
  it.todo("should return false for a common year 1800");
  it.todo("should return false for a common year 1900");
  it.todo("should return false for a common year 2100");

});
