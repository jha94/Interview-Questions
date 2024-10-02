var clearDigits = function (s) {
  const str = s.split("");
  const result = [];
  str.forEach((value) => {
    if (Number.isInteger(parseInt(value))) {
      result.pop();
    } else {
      result.push(value);
    }
  });
  console.log(result.join(""));
};

clearDigits("cb34");
