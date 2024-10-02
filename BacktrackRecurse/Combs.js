var combine = (n, k) => {
  const results = [];
  const dfs = (start, result) => {
    if (result.length === k) {
      results.push([...result]);
    }
    for (let index = start; index <= n; index++) {
      result.push(index);
      dfs(index + 1, result);
      result.pop();
    }
  };
  dfs(1, []);
  return results;
};
console.log(combine(3, 2));
