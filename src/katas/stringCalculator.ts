export default function stringCalculator(listOfNumbers: string) {
  const stringLength = listOfNumbers.length;
  if (stringLength === 0) {
    return 0;
  } else if (stringLength === 1) {
    return Number(listOfNumbers);
  } else {
    const sum = listOfNumbers
      .split(",")
      .reduce(
        (previousValue: number, currentValue: string) =>
          previousValue + parseInt(currentValue),
        0
      );

    return sum;
  }
}
