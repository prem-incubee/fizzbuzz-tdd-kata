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

  it("should return false for a common year 2017", () => {
    expect(isLeapYear(2017)).toBe(false);
  });

  it("should return false for a common year 2003", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  it("should return false for a common year 1975", () => {
    expect(isLeapYear(1997)).toBe(false);
  });


  it("should return true for a leap year 1600", () => {
    expect(isLeapYear(1600)).toBe(true);
  });

  it("should return true for a leap year 2000", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  it.todo("should return false for a common year 1700");
  it.todo("should return false for a common year 1800");
  it.todo("should return false for a common year 1900");
  it.todo("should return false for a common year 2100");

});
