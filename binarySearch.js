const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length - 1;
  let midPoint;
  while (start <= end) {
    midPoint = Math.floor((start + end) / 2);

    if (array[midPoint] == item) {
      return midPoint;
    } else if (array[midPoint] < item) {
      start = midPoint + 1;
    } else if (array[midPoint] > item) {
      end = midPoint - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 3, 4, 5, 13, 20, 25, 40, 42, 44, 53], 53));
