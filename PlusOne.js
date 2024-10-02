const plusOne = (digits) => {
  const result = [];
  String(Number(digits.join("")) + 1)
    .split("")
    .forEach((value) => {
      result.push(Number(value));
    });

  console.log(result);
};

plusOne([9, 9, 9]);
