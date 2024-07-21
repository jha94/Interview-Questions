const arrReduce = function (callback, initialValue) {
  let acc = initialValue || this[0];
  const start = initialValue === undefined ? 0 : 1;
  for (let index = start; index < this.length; index++) {
    acc = callback(acc, this[index]);
  }
  return acc;
};
Array.prototype.arrReduce = arrReduce;
const arr = [1, 2, 3, 4];

const result = arr.arrReduce((acc, current) => {
  return (acc *= current);
}, 0);
console.log(result);
