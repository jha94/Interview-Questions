const canConstruct = (ransomNote, magazine) => {
  for (let char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  return ransomNote.length === 0;
};

console.log(canConstruct("aa", "ab"));
