// PROBLEM STATEMENT
// =======================================================================
// Write a function that converts number to text, Passing an int number should return array of text number.
// ---------------------------------------------------------------------
// Example 1:
// 23498643 => ['two', 'three', 'four', 'nine', 'eight', 'six', 'four', 'three']
// ---------------------------------------------------------------------
// Example 2:
// 40263645 => ['four', 'zero', 'two', 'six', 'three', 'six', 'four', 'five']

const convert_number_to_text_one_way = (number) => {
  const response = [];

  const numberMapping = {
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
  };

  const numberArray = String(number).split("");

  numberArray.forEach((number) => {
    response.push(numberMapping[number]);
  });

  return response;
};

console.log(convert_number_to_text_one_way(23498643));
console.log(convert_number_to_text_one_way(40263645));
