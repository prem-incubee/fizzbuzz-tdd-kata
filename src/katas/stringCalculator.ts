export default function stringCalculator(listOfNumbers: string) {
  const stringLength = listOfNumbers.length;
  if (stringLength === 0) {
    return 0;
  } else if (stringLength === 1) {
    return Number(listOfNumbers);
  } else {
    let customSeparators: RegExp | string = /,|\n/;

    if (listOfNumbers.startsWith("//")) {
      const separatorEndIndex = listOfNumbers.indexOf("\n");
      const separatorDefinition = listOfNumbers.slice(2, separatorEndIndex);

      if (
        separatorDefinition.startsWith("[") &&
        separatorDefinition.endsWith("]")
      ) {
        // Handle multiple custom separators or separators of any length
        const separators = separatorDefinition
          .match(/\[([^\]]+)\]/g) // Match all patterns like "[***]"
          ?.map((sep) => sep.slice(1, -1)); // Remove square brackets

        if (separators) {
          customSeparators = new RegExp(
            separators
              .map((sep) => sep.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
              .join("|")
          ); // Escape special characters and join with "|"
        }
      } else {
        // Handle single-character custom separator
        customSeparators = separatorDefinition;
      }

      listOfNumbers = listOfNumbers.slice(separatorEndIndex + 1);
    }

    const numberArray = listOfNumbers
      .split(customSeparators)
      .map((strNum) => Number(strNum));

    const negativeNumbers = numberArray.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
    }

    const sum = numberArray.reduce((previousValue, currentValue) => {
      if (currentValue > 1000) {
        return previousValue;
      } else {
        return previousValue + currentValue;
      }
    }, 0);

    return sum;
  }
}
