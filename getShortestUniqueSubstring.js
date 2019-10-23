function getShortestUniqueSubstring(arr, str) {
  
  // the length of the array
  // slice it based on the length of the array
  // and check if every character in the sliced array 
  // it needs to return the shortest string
  let splitString = str.split('');
  let isValidString = ''

  splitString.forEach((item, i) => {
    
   let uniqueString = splitString.slice(i,arr.length+i).join('')
     
   if (arr.includes(uniqueString.split('')[0]) && arr.includes(uniqueString.split('')[1]) && arr.includes(uniqueString.split('')[2])) {
     isValidString = uniqueString
   }

    
    return isValidString
  })
  return isValidString
  }

const arr = ['x','y','z']
const str = "xyyzyzyx"

console.log(getShortestUniqueSubstring(arr, str))