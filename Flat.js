function flatArray(arr, level) {
  const result = [];
  arr.forEach((value) => {
    if (Array.isArray(value) && level) {
      return result.push(...flatArray(value, level - 1));
    } else {
      result.push(value);
    }
  });
  return result;
}

const arr = [1, 2, [3], [[5]]];
console.log(flatArray(arr, 1));
