var findAnagrams = function (s, p) {
  const result = [];
  for (let index = 0; index <= s.length - p.length; index++) {
    const subStr = s.slice(index, index + p.length);
    const sortStr = (value) => {
      return value.split("").sort().join("");
    };
    if (sortStr(subStr) == sortStr(p)) {
      result.push(index);
    }
  }
  return result
};

findAnagrams("abab", "ab");
