import isLeapYear from "@/katas/leapYear";

describe("Leap year determination in isLeapYear", () => {

  it("should return true for a leap year 2008", () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  it.todo("should return true for a leap year 1996");
  it.todo("should return true for a leap year 2012");
  it.todo("should return true for a leap year 2016");
  it.todo("should return true for a leap year 1608");

  it.todo("should return false for a common year 1997");
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
