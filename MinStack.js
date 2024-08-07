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

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
console.log(minStack);
console.log(minStack.top());
minStack.pop();
console.log(minStack);
console.log(minStack.top());
