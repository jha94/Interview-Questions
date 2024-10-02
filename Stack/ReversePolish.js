var evalRPN = function (tokens) {
  const result = [];
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  tokens.forEach((value) => {
    if (ops[value]) {
      const first = result.pop();
      const second = result.pop();
      result.push(ops[value](second, first));
    } else {
      result.push(Number(value));
    }
  });
  return result.pop();
};

console.log(evalRPN(["1", "2", "+", "3", "*", "4", "-"]));
