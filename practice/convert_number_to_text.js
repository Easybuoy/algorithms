// PROBLEM STATEMENT
// =======================================================================
// Write a function that converts number to text, Passing an int number should return array of text number.
// The function should chunk the int number into two digits and return the text format of the chunks.
// ---------------------------------------------------------------------
// Example 1:
// Given 23498643: Function should return ['twenty-three', 'forty-nine', 'eighty-six', 'forty-three']
// Steps:
// 23498643 => 23, 49, 86, 43 => ['twenty-three', 'forty-nine', 'eighty-six', 'forty-three']
// ---------------------------------------------------------------------
// Example 2:
// Given 40263645: Function should return ['forty', 'twenty-six', 'thirty-six', 'forty-five']
// Steps:
// 40263645 => 40, 26, 36, 45 => ['forty', 'twenty-six', 'thirty-six', 'forty-five']
// ---------------------------------------------------------------------
// Example 3:
// Given 9203234612391071: Function should return ['ninety-two', 'three', 'twenty-three', 'forty-six', 'twelve', 'thirty-nine', 'ten', 'seventy-one']
// Steps
// 9203234612391071 => 92, 03, 23, 46, 12, 39, 10, 71 => ['ninety-two', 'three', 'twenty-three', 'forty-six', 'twelve', 'thirty-nine', 'ten', 'seventy-one']
// ---------------------------------------------------------------------
// NOTE:
// The number of digits in the input will always be even.

const mapNumbers = {
  ones: {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  },
  tens: {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  },
};

// console.log(mapNumbers);

const convertNumberToText = (numbers) => {

    const responseArray = [];
  const numberArray = String(numbers).split("");

  numberArray.forEach((number, i) => {
    let text;

    if (i % 2 === 0) {
      const firstNumber = number;
      const secondNumber = numberArray[i + 1];
      const joinedNumbers = firstNumber + secondNumber;

      if (firstNumber === "0") {
        text = `${mapNumbers.ones[secondNumber]}`;
        responseArray.push(text);
        return;
      }

      if (joinedNumbers === "10") {
        text = `${mapNumbers.ones[joinedNumbers]}`;
        responseArray.push(text);
        return;
      }
      if (firstNumber === "1" && parseInt(secondNumber) < 9) {
        text = `${mapNumbers.ones[joinedNumbers]}`;
        responseArray.push(text);
        return;
      }

      if (secondNumber == "0") {
        text = `${mapNumbers.tens[firstNumber]}`;
        responseArray.push(text);
        return;
      }
      text = `${mapNumbers.tens[firstNumber]}-${mapNumbers.ones[secondNumber]}`;
      responseArray.push(text);
    }
  });

  return responseArray;
};


console.log(convertNumberToText(23498643));
console.log(convertNumberToText(40263645));
console.log(convertNumberToText(9203234612391071));

