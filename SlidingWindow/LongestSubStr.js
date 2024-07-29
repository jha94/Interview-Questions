const longestSubStr = (s) => {
  const set = new Set();
  let left = 0;
  let maxSize = 0;
  for (let index = 0; index < s.length; index++) {
    while (set.has(s[index])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[index]);
    maxSize = Math.max(index - left + 1, maxSize);
  }
  return maxSize;
};

console.log(longestSubStr("bbbbb"));
