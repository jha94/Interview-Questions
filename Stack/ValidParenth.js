const isValid = function (string) {
  const stack = [];
  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    switch (char) {
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (char !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[{}"));
