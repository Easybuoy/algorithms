function threeNumberSum(arr, target) {
    const sortedArray = arr.sort();
    let response = []
    sortedArray.forEach(item => {
        sortedArray.forEach(item2 => {
                sortedArray.forEach(item3 => {
                    if (item+item2+item3 == target) {
                        let res = [item, item2, item3].sort((a,b) => a-b);
                           
                            response = response.concat([res])
                    }
                })
        })
    })




    let unique = response.map(JSON.stringify).reverse().filter(function (e, i, a) {
    return a.indexOf(e, i+1) === -1;
}).reverse().map(JSON.parse)

    console.log(unique)
    return unique
}

function threeNumberSum(arr, target) {
    let dict = {};
      for (let i = 0; i < arr.length; i++) {
        dict[target - arr[i]] = arr[i]
      }
    
      arr = arr.sort((a, b) => a - b)
      let response = []
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (dict[arr[i] + arr[j]] >= arr[j] + 1) {
            response.push([arr[i], arr[j], dict[arr[i] + arr[j]]])
          }
        }
      }
      return response
    }

console.log(threeNumberSum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], 30))