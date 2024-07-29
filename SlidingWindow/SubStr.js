var countGoodSubstrings = function (s) {
  let goodStr = 0;
  for (let index = 0; index < s.length - 2; index++) {
    const subStr = s.slice(index, index + 3);
    const set = new Set(subStr);
    set.size === 3 && (goodStr += 1);
  }
  return goodStr;
};

console.log(countGoodSubstrings("xyzzaz"));
