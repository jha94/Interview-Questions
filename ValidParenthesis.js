function validate(str) {
  const result = [];
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    switch (char) {
      case "[":
        result.push("]");
        break;
      case "(":
        result.push(")");
        break;
      case "{":
        result.push("}");
        break;
      default:
        if (char !== result.pop()) {
          return false;
        }
    }
  }
  return result.length === 0;
}
console.log(validate("{[()]}"));
