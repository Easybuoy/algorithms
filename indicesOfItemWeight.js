function getIndicesOfItemWeights(arr, limit) {
  // your code goes here
  let response = []
  arr.forEach((item, i) => {
    arr.forEach((item2, j) => {
      if (i != j && item+item2 == limit) {
         response = [i, j]
      }
    })
  })
  
  return response
}

console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21))