export default function factorsOf(number: number) {
  const primeFactors = [];
  let divisor = 2;
  while (number > 1) {
    while (number % divisor === 0) {
      primeFactors.push(divisor);
      number /= divisor
    }
    divisor++
  }

  return primeFactors;
}
