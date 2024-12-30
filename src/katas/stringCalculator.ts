export default function stringCalculator(listOfNumbers: string) {
  const stringLength = listOfNumbers.length;
  if (stringLength === 0) {
    return 0;
  } else if (stringLength === 1) {
    return Number(listOfNumbers);
  } else {
    let customSeparators: RegExp | string = /,|\n/;

    if (listOfNumbers.startsWith("//")) {
      const splittedNumberList = listOfNumbers.split("\n");
      customSeparators = splittedNumberList[0].slice(2);
      listOfNumbers = splittedNumberList[1];
    }
    const sum = listOfNumbers
      .split(customSeparators)
      .reduce(
        (previousValue: number, currentValue: string) =>
          previousValue + parseInt(currentValue),
        0
      );

    return sum;
  }
}
