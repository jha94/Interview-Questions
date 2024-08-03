var minSubArrayLen = function (target, nums) {
  let left = 0;
  let total = 0;
  let result = Infinity
  for(let index=0;index<nums.length;index++){
    total+=nums[index]
    while(total>=target){
      result = Math.min(index-left+1, result)
      total -= nums[left]
      left++
    }
  }
  return result
};

console.log(minSubArrayLen(4, [1,4,4]));
