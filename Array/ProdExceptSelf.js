const productExceptSelf = (nums) => {
    const result = []
    let prefix = 1;
    for(let index=0;index<nums.length;index++){
        result[index] = prefix;
        prefix*=nums[index]
    }
    
    let suffix = 1;
    for(let index=nums.length-1;index>=0;index--){
        result[index]*=suffix
        suffix*=nums[index]
    }
    return result
}

console.log(productExceptSelf([1,2,3,4]))