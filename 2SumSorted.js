const twoSum = (arr, target) => {
    let p1 = 0;
    let p2 = arr.length-1;
    while(arr[p1]+arr[p2]!==target){
        if(arr[p1]+arr[p2]>target){
            p2--
        } else{
            p1++
        }
    }
    return [p1+1, p2+1]
}

console.log(twoSum([-1,0], -1))