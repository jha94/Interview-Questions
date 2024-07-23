const intToRoman = (num) => {
  const map = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ]);
  let number = num;
  let result = "";
  while (number > 0) {
    let current;
    map.forEach((key, value) => {
      if (value <= number) {
        current = value;
      }
    });
    result += map.get(current);
    number -= current;
  }
  return result;
};

console.log(intToRoman(3749));
