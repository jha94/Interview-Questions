const countDistinctValues = (arr) => {
  let set = new Set();
  arr.forEach((value) => {
    if (value > 0) {
      set.add(value);
    }
  });
  console.log(set.size);
};

countDistinctValues([-1, -1, 0, 1, 1,3, 2, ]);
