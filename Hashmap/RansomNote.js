const canConstruct = (ransomNote, magazine) => {
  for (let char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  console.log(ransomNote);

  return ransomNote.length ? false : true;
};

console.log(canConstruct("aa", "aab"));
