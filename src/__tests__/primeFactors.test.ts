import factorsOf from "@/katas/primeFactors";

describe("prime factors for a given natural number", () => {
  it("prime factor of 1 should be empty list", () => {
    expect(factorsOf(1)).toEqual([]);
  });

  it("prime factor of 2 should be list of 2", () => {
    expect(factorsOf(2)).toEqual([2]);
  });

  it("prime factor of 3 should be list of 3", () => {
    expect(factorsOf(3)).toEqual([3]);
  });

  it("prime factor of 4 should be list of 2,2", () => {
    expect(factorsOf(4)).toEqual([2,2])
  });

  it("prime factor of 5 should be list of 5", () => {
    expect(factorsOf(5)).toEqual([5])
  });

  it("prime factor of 6 should be list of 2,3", () => {
    expect(factorsOf(6)).toEqual([2,3])
  });

  it("prime factor of 7 should be list of 7", () => {
    expect(factorsOf(7)).toEqual([7])
  });

  it("prime factor of 8 should be list of 2,2,2", () => {
    expect(factorsOf(8)).toEqual([2,2,2])
  });

  it("prime factor of 9 should be list of 3,3", () => {
    expect(factorsOf(9)).toEqual([3,3])
  });

});
