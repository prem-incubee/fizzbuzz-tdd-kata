import fizzBuzz from "@/fizzbuzz";

describe("fizzBuzz test suite", () => {
  it('should return "1" for input 1', () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it('should return "2" for input 2', () => {
    expect(fizzBuzz(2)).toBe("2");
  });

  it('should return "4" for input 4', () => {
    expect(fizzBuzz(4)).toBe("4");
  });

  it('should return "Fizz" for input 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it('should return "Fizz" for input 6', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('should return "Fizz" for input 9', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it('should return "Fizz" for input 12', () => {
    expect(fizzBuzz(12)).toBe("Fizz");
  });

  it('should return "Fizz" for input 15', () => {
    expect(fizzBuzz(15)).toBe("Fizz");
  });

  it('should return "Buzz" for input 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
});
