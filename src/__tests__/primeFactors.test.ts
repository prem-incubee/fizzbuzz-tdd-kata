import factorsOf from "@/katas/primeFactors"

describe("prime factors for a given natural number",() => {
    it("prime factor of 1 should be empty list", () => {
        expect(factorsOf(1)).toEqual([])
    })

    it("prime factor of 2 should be list of 2", () => {
        expect(factorsOf(2)).toEqual([2])
    })

    it.todo("prime factor of 3 should be 3")
    it.todo("prime factor of 4 should be 2,2")
    it.todo("prime factor of 5 should be 5")
    it.todo("prime factor of 6 should be 2,3")
    it.todo("prime factor of 7 should be 7")
    it.todo("prime factor of 8 should be 2,2,2")
    it.todo("prime factor of 9 should be 3,3")
})