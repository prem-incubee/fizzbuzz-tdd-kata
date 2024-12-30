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

    const numberArray = listOfNumbers
      .split(customSeparators)
      .map((strNum) => Number(strNum));

    const negativeNumbers = numberArray.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
    }

    const sum = numberArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    return sum;
  }
}
