function hourglassSum(arr) {
    let hourglasssumarr = [];
    let newArr = []
    for(i=0; i < arr.length; i++) {
      for(j=0; j < arr.length; j++) {
          if (j <= 3 && i <=3) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
          
           hourglasssumarr = hourglasssumarr.concat(sum)
          
          }
      }
    }
    return Math.max(...hourglasssumarr)
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
])