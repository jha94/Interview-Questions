const peakElement = (nums) => {
    let result = 0;
    let max = nums[0];
    for(let index=1;index<nums.length;index++){
        if(nums[index]>max){
            max = nums[index]
            result = index
        }
    }
    return result
}

console.log(peakElement([1,2,1,3,5,6,4]))