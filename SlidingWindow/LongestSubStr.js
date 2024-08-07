const longestSubStr = (string) => {
  const set = new Set();
  let left = 0;
  let maxSize = 0;
  for (let index = 0; index < string.length; index++) {
    while (set.has(string[index])) {
      set.delete(string[left]);
      left++;
    }
    set.add(string[index]);
    maxSize = Math.max(maxSize, index - left + 1);
  }
  return maxSize;
};

console.log(longestSubStr("bbbbb"));
