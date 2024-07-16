Array.prototype.mapArray = function (fn) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(fn(this[index]));
  }
  return result;
};

const arr = [1, 2, 3, 4];
const result = arr.mapArray((value) => value * 2);
console.log(result);
