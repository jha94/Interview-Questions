const simplifyPath = (path) => {
  const stack = [];
  path = path.split("/");
  for (let index = 0; index < path.length; index++) {
    if (path[index] === "." || path[index] === "") continue;
    if (path[index] === "..") stack.pop();
    else {
      stack.push(path[index]);
    }
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/home/user/Documents/../Pictures"));
