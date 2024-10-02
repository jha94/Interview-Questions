function topKFrequent(nums, k) {
  if (!nums.length) return [];
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      map.set(nums[index], map.get(nums[index]) + 1);
    } else {
      map.set(nums[index], 1);
    }
  }

  const sortedArr = [...map.entries()].sort((a, b) => a[1] - b[1]).reverse();

  const result = [];
  for (let index = 0; index < k; index++) {
    result.push(sortedArr[index][0]);
  }
  return result;
}

console.log(topKFrequent([7, 7], 1));
