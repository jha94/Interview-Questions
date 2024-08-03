var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";
  const arr = [...s];
  const set = new Set(arr);
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (set.has(char.toLowerCase()) && set.has(char.toUpperCase())) continue;
    const str1 = longestNiceSubstring(s.substring(0, index));
    const str2 = longestNiceSubstring(s.substring(index + 1));
    return str1.length >= str2.length ? str1 : str2;
  }
  return s;
};

console.log(longestNiceSubstring("YazaAay"));
