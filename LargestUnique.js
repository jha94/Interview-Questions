const getLargestUnique = (arr) => {
  const map = new Map();
  arr.forEach((value) => {
    if (map.has(value)) {
      map.delete(value);
    } else {
      map.set(value, 1);
    }
  });
  let max = -Infinity;
  map.forEach((key, value) => {
    if (value > max) {
      max = value;
    }
  });
  console.log(max);
};

getLargestUnique([4, 3, 2, 7, 3, 4, 8]);
