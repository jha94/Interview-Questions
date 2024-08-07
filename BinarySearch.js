const searchInsert = (arr, element) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return mid + 1;
};

console.log(searchInsert([1, 3, 5, 6], 7));
