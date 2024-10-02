function checkInclusion(s1, s2) {
  const sortStr = (string) => {
    return string.split("").sort().join("");
  };
  return sortStr(s2).includes(sortStr(s1));
}

console.log(checkInclusion("abc", "lecaabee"));
