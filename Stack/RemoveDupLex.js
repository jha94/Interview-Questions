var removeDuplicateLetters = (s) => {
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    const tempStack = [...stack];
    tempStack.splice(tempStack.indexOf(s[index]), 1);
    tempStack.push(s[index]);
    if (stack.includes(s[index])) {
      if (stack.join("").localeCompare(tempStack) > 1) {
        stack.splice(stack.indexOf(s[index]), 1);
        stack.push(s[index]);
      }
    } else {
      stack.push(s[index]);
    }
  }
  console.log(stack.join(""));
};

removeDuplicateLetters("cbacdcbc");
