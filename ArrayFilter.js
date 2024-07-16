Array.prototype.filterArray = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index])) {
      result.push(this[index]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4];
const result = arr.filterArray((value) => value > 2);
console.log(result);
