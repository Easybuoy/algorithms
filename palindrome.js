// const palindrome = string => {
//   let lowercaseString = string.toLowerCase();
//   let stringArr = lowercaseString.split('');
//   let reverseString = '';
//   let length = stringArr.length;
//   stringArr.forEach(item => {
//     if (length == 0) {
//       return newString;
//     }
//     reverseString += stringArr[length - 1];

//     length--;
//   });

//   if (lowercaseString == reverseString) {
//     return true;
//   }
//   return false;
// };

// console.log(palindrome('Anna'));

const isPalindrome = (str) => {
    // convert to lowercase
    str = str.toLowerCase();
  
    // create an object to store how many times
    // each character occur in the string
    const charOccurenceCount = {}
    
    for (let i = 0; i < str.length; i++) {
      
      // if character already seen increase count
      if (str[i] in charOccurenceCount) {
        charOccurenceCount[str[i]] = charOccurenceCount[str[i]] + 1
      }
  
      // else initialize count
      else charOccurenceCount[str[i]] = 1;
    }
  
    // For a string to be a possible palindrome
    // there should be at most one characters occuring odd times
  
    // count the number of odd character occurence
    let oddOccurence = 0
    Object.values(charOccurenceCount).forEach(c => {
      if (c % 2 !== 0) oddOccurence++;
    })
  
    return oddOccurence <= 1;
  };
  
  console.log(isPalindrome('bsba'))