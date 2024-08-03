const maxSumSubArr = (arr, size) => {
    let left = 0;
    let maxSum = 0;
    let total = 0;
    for(let index = 0; index<arr.length-size;index++){
        for(let ind=left;ind<left+size;ind++){
            total += arr[ind]
        }
        maxSum = Math.max(maxSum, total)
        left++
        total = 0
    }
    return maxSum
}

console.log(maxSumSubArr([-1, 2, 3, 1, 2], 3))