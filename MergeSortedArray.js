const merge = (nestedArray) => {
  const result = [];
  nestedArray.forEach((plainArray) => {
    result.push(...plainArray);
  });

  return result.sort((a, b) => a - b);
};

console.log(
  merge([
    [1, 1, 1, 100, 1000, 10000],
    [1, 2, 2, 2, 200, 200, 1000],
    [1000000, 10000001],
    [2, 3, 3],
  ])
);
