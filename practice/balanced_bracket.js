// PROBLEM STATEMENT
// =======================================================================
// Given a string of round open and closing brackets, return whether the brackets are balanced (well-formed).
// Example 1: Given the string "([])[]({})", you should return true.
// Example 2: Given the string "([)(]" or "((()", you should return false.
// Test Cases:
// ()             => true
// (([]){})    => true
// ([)            => true
// ([)]        => true
// [(({}[]))]    => true
// [()()]()     => true
// ())(        => false
// (hello)        => true
// ())            => false

const balancedBrackets = (string) => {
  const splitString = string.split("");
  const filteredString = splitString.filter((string) =>
    ["(", ")", "{", "}", "[", "]"].includes(string)
  );

  const checkArray = [];
  const check = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i <= filteredString.length; i++) {
    if (
      filteredString[i] === "{" ||
      filteredString[i] === "(" ||
      filteredString[i] === "["
    ) {
      checkArray.push(filteredString[i]);
    } else {
      const lastItem = checkArray.pop();

      if (filteredString[i] !== check[lastItem]) {
        return false;
      }
    }
  }
  return true;
};

console.log(balancedBrackets("()"));
console.log(balancedBrackets("(([]){})"));
console.log(balancedBrackets("([)"));
console.log(balancedBrackets("([)]"));
console.log(balancedBrackets("[(({}[]))]"));
console.log(balancedBrackets("[()()]()"));
console.log(balancedBrackets("())("));
console.log(balancedBrackets("(hello)"));
console.log(balancedBrackets("())"));
