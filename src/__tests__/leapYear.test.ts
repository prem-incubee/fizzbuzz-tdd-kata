import isLeapYear from "@/katas/leapYear";

describe("Leap year determination in isLeapYear", () => {

  it("should return true for a leap year like 2008", () => {
    expect(isLeapYear(2008)).toBe(true);
  });

});
