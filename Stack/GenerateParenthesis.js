const generateParenthesis = (n) => {
  const result = [];
  backTrack(n, 0, 0, "", result);
  return result;
};

const backTrack = (n, openN, closedN, current, result) => {
  if (openN === closedN && openN === n) {
    result.push(current);
    return;
  }

  if (openN < n) {
    backTrack(n, openN + 1, closedN, current + "(", result);
  }
  if (closedN < openN) {
    backTrack(n, openN, closedN + 1, current + ")", result);
  }
};

console.log(generateParenthesis(3));
