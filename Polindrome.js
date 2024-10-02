// aam jindagi

// var isPalindrome = function(s) {
//     const chars = 'abcdefghijklmnopqrstuvwxyz';
//     let string ='';
//     let reversedStr=''
//     s.toLowerCase().split('').forEach(value=>{
//         if(value && chars.includes(value)){
//             string+=value
//         }
//     })
//     if(!string) {
//        return true
//     }
//     s.toLowerCase().split('').reverse().forEach(value=>{
//         if(chars.includes(value)){
//             reversedStr+=value
//         }
//     })
//     return string==reversedStr
// };

//mentos jindagi

// var isPalindrome = function(s) {
//     const chars = 'abcdefghijklmnopqrstuvwxyz';
//     let string ='';
//     s.toLowerCase().split('').forEach(value=>{
//         if(value && chars.includes(value)){
//             string+=value
//         }
//     })
//     if(!string) {
//        return true
//     }
//     let result;
//     let i =0;
//     let j = string.length-1;
//     while(i<=j){
//         if(string[i]===string[j]){
//             result = true
//             i++;
//             j--
//         } else{
//             return false
//         }
//     }
//     return result
// };
// console.log(isPalindrome('race a car'))

var isPalindrome = function (s) {
  let val = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  console.log(val);
};

isPalindrome("A man, a plan, a canal: Panama");
