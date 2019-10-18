// const binarySearch = (array, item) => {
//   let start = 0;
//   let end = array.length ;
//   while (start <= end) {
//     let midPoint = Math.floor((start + end) / 2);

//     if (array[midPoint] == item) {
//       return midPoint;
//     } else if (array[midPoint] < item) {
//       start = midPoint + 1;
//     } else if (array[midPoint] > item) {
//       end = midPoint - 1;
//     }
//   }
//   return -1;
// };

// Recursive Approach
const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length;

  const search = (start, end) => {
    let midPoint = Math.floor((start + end) / 2);
    if (array[midPoint] == item) {
      return midPoint;
    } else if (array[midPoint] < item) {
      start = midPoint + 1;
    } else if (array[midPoint] > item) {
      end = midPoint - 1;
    } else {
      return -1;
    }
    return search(start, end);
  };

  return search(start, end);
};
console.log(binarySearch([1, 3, 4, 5, 13, 20, 25, 40, 42, 44, 53], 53));
