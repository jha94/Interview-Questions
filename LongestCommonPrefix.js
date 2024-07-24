const longestCommonPrefix = (arr) => {
    for(let index=0;index<arr[0].length;index++){
        for(let s of arr){
            if(arr[0][index]!==s[index]){
               return s.slice(0,index)
            }
        }
    }
    return arr[0]
}
console.log(longestCommonPrefix(["dog","racecar","car"]))