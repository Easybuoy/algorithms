const mergeSort = array => {
  const midPoint = Math.floor(array.length / 2);

  let firstHalf = array.slice(0, midPoint);
  let secondHalf = array.slice(midPoint);

  return merge(firstHalf, secondHalf);
};

const merge = (left, right) => {
  let result = [];

  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < left.length && secondIndex < right.length) {
    if (left[firstIndex] <= right[secondIndex]) {
      result.push(left[firstIndex]);
      firstIndex += 1;
    } else {
      result.push(right[secondIndex]);
      secondIndex += 1;
    }
  }
  return result.concat(left.slice(firstIndex)).concat(right.slice(secondIndex));
};

// console.log(mergeSort([2, 4, 0, 10]));
console.log(mergeSort([2, 4, 0, 10, 9, 31, 4, 5, 7, 99, 192, 46]));
