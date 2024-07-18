const getFirstDuplicate = (str) => {
  const charMap = new Map();
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (charMap.has(char)) {
      return char;
    } else {
      charMap.set(char, 1);
    }
  }
};

console.log(getFirstDuplicate("abcdef"));
