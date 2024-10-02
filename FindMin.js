const findMin = (nums) => {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, mid);
  const rightArr = nums.slice(mid);
  return merge(findMin(leftArr), findMin(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  while (leftArr.length) {
    sortedArr.push(leftArr.shift());
  }
  while (rightArr.length) {
    sortedArr.push(rightArr.shift());
  }

  return sortedArr;
};

console.log(findMin([3, 4, 5, 6, 1, 2])[0]);
