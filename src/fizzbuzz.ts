export default function fizzBuzz(num: number) {
  if (num % 3 === 0) return "Fizz";
  if (num === 5) return "Buzz";
  return num.toString();
}
