var removeDuplicates = function (s) {
  const result = [];
  for (let index = 0; index < s.length; index++) {
    if (result[result.length - 1] === s[index]) {
      result.pop();
    } else {
      result.push(s[index]);
    }
  }
  return result.join("");
};

console.log(removeDuplicates("azxxzy"));
