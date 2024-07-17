const curry = (callback) => {
  return (innerCurry = (...args) => {
    if (args.length >= callback.length) {
      return callback(...args);
    } else {
      return (...args2) => innerCurry(...args, ...args2);
    }
  });
};

const join = (a, b, c) => `${a}_${b}_${c}`;

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2)(5));
