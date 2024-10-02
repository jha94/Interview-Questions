const letterCombinations = (digits) => {
    if(!digits.length) return []
  const result = [];
  const alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const dfs = (index, digits, slate) => {
    if (index === digits.length) {
      return result.push(slate.join(""));
    }
    const chars = alpha[digits[index]];
    for (let char of chars) {
      slate.push(char);
      dfs(index + 1, digits, slate);
      slate.pop();
    }
  };
  dfs(0, digits, []);
  return result;
};

console.log(letterCombinations("23"));
