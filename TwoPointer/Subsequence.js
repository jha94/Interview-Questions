const isSubSequence = (s, t) => {
  let sequence = 0;
  if (s.length > t.length) return false;
  for (let index = 0; index < t.length; index++) {
    if (s[sequence] === t[index]) {
      sequence++;
    }
  }
  return sequence === s.length;
};

console.log(isSubSequence("axc", "ahbgdc"));
