// const balanced_brackets = brackets => {
//   const splitBrackets = brackets.split('');
//   console.log(splitBrackets);

//   if (splitBrackets.length % 2 != 0) {
//     return false;
//   }
//   let count = 0;
//   let isGoneOverTwice = 0;

//   while (splitBrackets.length > 0) {
//     if (splitBrackets[count] + splitBrackets[count + 1] == '[]') {
//       splitBrackets.splice(count, 2);
//     }

//     if (splitBrackets[count] + splitBrackets[count + 1] == '()') {
//       splitBrackets.splice(count, 2);
//     }

//     if (splitBrackets[count] + splitBrackets[count + 1] == '{}') {
//       splitBrackets.splice(count, 2);
//     }
//     count++;

//     if (count == splitBrackets.length) {
//       count = 0;
//       isGoneOverTwice++;
//     }

//     if (isGoneOverTwice == 2) {
//       return false;
//     }
//   }
//   return true;
// };

let balanced_brackets = str => {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < str.length; i++) {
    // If character is an opening brace add it to a stack
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();
      console.log(str[i], map[last])
        
      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (str[i] !== map[last]) {
        return false;
      }
    }
  }
  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
// console.log(balanced_brackets('{([])}'));
console.log(balanced_brackets('({)}'));
// console.log(balanced_brackets('[]'))
