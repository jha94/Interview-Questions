var isPalindrome = function (s) {
  let str = "";
  s.toLowerCase()
    .split("")
    .forEach((value) => {
      if (value.match(/[a-z]/i)) {
        str += value;
      }
    });
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("race a car"));
