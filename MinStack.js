const MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[0];
};

MinStack.prototype.getMin = function () {
  let min = Infinity;
  this.stack.forEach((value) => {
    if (value <= min) {
      min = value;
    }
  });
  return min;
};

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
console.log(minStack);
console.log(minStack.top());
minStack.pop();
console.log(minStack);
console.log(minStack.top());
console.log(minStack.getMin());
