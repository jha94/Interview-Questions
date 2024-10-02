const groupAnagram = (strs) => {
  const result = {};
  strs.forEach((str) => {
    const arr = new Array(26).fill(0);
    for (let char of str) {
      arr[char.charCodeAt() - "a".charCodeAt()] += 1;
    }

    if (result[arr]) {
      result[arr].push(str);
    } else {
      result[arr] = [str];
    }
  });
  return Object.values(result);
};
console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
