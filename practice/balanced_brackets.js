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

// let balanced_brackets = str => {
//   const splitCharacters = str.split('');
//   const character = splitCharacters.filter(item =>
//     ['{', '}', '[', ']', '|'].includes(item)
//   );
//   console.log(character, 'char');

//   let stack = [];
//   let map = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   };

//   for (let i = 0; i < character.length; i++) {
//     if (character[i] === '(' || character[i] === '{' || character[i] === '[') {
//       stack.push(character[i]);
//     } else {
//       let last = stack.pop();

//       if (character[i] !== map[last]) {
//         return false;
//       }
//     }
//   }

//   if (stack.length !== 0) {
//     return false;
//   }

//   return true;
// };
// console.log(balanced_brackets('{{||[]||}}'));
// console.log(balanced_brackets('({)}'));
// console.log(balanced_brackets('[]'))


function balancedBrackets(string) {
    const splitCharacters = string.split('');
    console.log(splitCharacters)
    const characters = splitCharacters.filter(item => ['(', ')', '{', '}', '[', ']', '|'].includes(item))
    console.log(characters)
    let response = []
    let check = {
        '(': ')',
        '[': ']',
        '{': '}',
        '|': '|'
    }
    for(let i=0; i < characters.length; i++ ){
        if (characters[i] == '(' || characters[i] == '[' || characters[i] == '{' || characters[i] == '|') {
            response.push(characters[i])
        } else {
            let lastItem = response.pop();
            // console.log(characters[i], check[lastItem])
            // console.log(characters[i], check[lastItem])
            if (characters[i] != check[lastItem]) {
                // console.log('a')
                return false;
            }
        }
    }

    if (response.length !== 0){
        return false
    }
    return true
}

// console.log(balancedBrackets('{{||[]||}}'));
// console.log(balancedBrackets('()'))
// console.log(balancedBrackets('(([]){})'))
// console.log(balancedBrackets('([)'))
// console.log(balancedBrackets('([)]'))
// console.log(balancedBrackets('[(({}[]))]'))
// console.log(balancedBrackets('[()()]()'))
// console.log(balancedBrackets('())('))
console.log(balancedBrackets('(hello)'))
// console.log(balancedBrackets('())'))