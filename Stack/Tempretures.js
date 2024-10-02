
const temperatures = (temperatures) => {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let index = 0; index < temperatures.length; index++) {
    const temp = temperatures[index];
    while (stack.length && stack[stack.length - 1][0] < temp) {
      const [satckT, stackIndex] = stack.pop();
      res[stackIndex] = index - stackIndex;
    }
    stack.push([temp, index]);
  }
  return res;
};

console.log(temperatures([22, 21, 20]));
