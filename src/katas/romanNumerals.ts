export default function convertToRomanNumerals(amount: number) {
  return numberToRoman[amount];
}

const numberToRoman: { [key: number]: string } = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};
