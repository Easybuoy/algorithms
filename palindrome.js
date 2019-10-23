const palindrome = string => {
  let lowercaseString = string.toLowerCase();
  let stringArr = lowercaseString.split('');
  let reverseString = '';
  let length = stringArr.length;
  stringArr.forEach(item => {
    if (length == 0) {
      return newString;
    }
    reverseString += stringArr[length - 1];

    length--;
  });

  if (lowercaseString == reverseString) {
    return true;
  }
  return false;
};

console.log(palindrome('anna'));
