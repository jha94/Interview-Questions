const merge = (nums1, nums2) => {
  const sortedArr = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      sortedArr.push(nums1.shift());
    } else {
      sortedArr.push(nums2.shift());
    }
  }
  return [...sortedArr, ...nums1, ...nums2];
};

const result = merge([2], []);

if (result.length % 2 === 0) {
  const index = result.length / 2;
  const first = result[index - 1];
  const second = result[index];
  console.log((first + second) / 2);
} else {
  console.log(result[Math.floor(result.length / 2)].toFixed(1));
}
