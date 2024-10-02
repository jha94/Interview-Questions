var reverseWords = function (s) {
  let result = [];
  for (let char of s.split(" ")) {
    if (char) {
      result.push(char);
    }
  }
  console.log(result.reverse().join(" "));
};

reverseWords("a good example");
