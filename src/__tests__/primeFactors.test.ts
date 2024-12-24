import factorsOf from "@/katas/primeFactors"

describe("prime factors for a given natural number",() => {
    it("prime factor of 1 should be empty list", () => {
        expect(factorsOf(1)).toEqual([])
    })
})