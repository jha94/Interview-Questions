const memoize = (fn) => {
  const cacheMap = new Map();
  return (...args) => {
    const key = args.join("_");
    if (cacheMap.has(key)) {
      console.log("from cache");
      return cacheMap.get(key);
    } else {
      const result = fn(...args);
      cacheMap.set(key, result);
      return result;
    }
  };
};

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum(2, 2));
