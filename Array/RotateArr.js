const rotate = (nums, k) => {
  k %= nums.length;
  const reverse = (start, end) => {
    while (end >= start) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      end--;
      start++;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
