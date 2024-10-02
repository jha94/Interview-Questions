var searchMatrix = function (matrix, target) {
  matrix = matrix.flat();
  let left = 0;
  let right = matrix.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[mid] === target) {
      return true;
    } else if (matrix[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
