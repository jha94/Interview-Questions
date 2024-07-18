const reorder = (element, order) => {
  const sortedArray = [...order].sort();
  const result = [];
  sortedArray.forEach((value) => {
    if (element[order.indexOf(value)]) {
      result.push(element[order.indexOf(value)]);
    }
  });
  return result;
};

console.log(reorder(["A", "B", "C", "D", "E", "F"], [1, 5, 4, 3, 2, 0]));
