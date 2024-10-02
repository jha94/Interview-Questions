var spiralOrder = function (matrix) {
  if (matrix.length <= 1) {
    return matrix.pop();
  }
  const result = [];
  result.push(...matrix.shift(), matrix[0].pop());
  const last = matrix.pop()?.reverse();
  result.push(...last, ...matrix[0]);
  console.log(result);
};

console.log(spiralOrder([[2, 3]]));
