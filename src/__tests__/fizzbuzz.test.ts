import fizzBuzz from "@/fizzbuzz";

describe('fizzBuzz test suite', () => {
    it('should return "1" for input 1', () => {
        expect(fizzBuzz(1)).toBe("1");
    });

    it('should return "2" for input 2', () => {
        expect(fizzBuzz(2)).toBe("2");
    });

    it('should return "4" for input 4', () => {
        expect(fizzBuzz(4)).toBe("4");
    });
});