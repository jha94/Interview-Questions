const isHappy = (number) => {
  let result = 0;
  let multpledValue
  String(number)
    .split("")
    .map((value) => {
       multpledValue = parseInt(value) * parseInt(value);
      result += multpledValue;
    });

  if (result > 1) {
    return isHappy(result);
  }
  return result === 1;
};

console.log(isHappy(2));
