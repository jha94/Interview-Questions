function fib(n) {
  const result = [0, 1];
  for (let index = 0; index < n - 2; index++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

console.log(fib(13));
