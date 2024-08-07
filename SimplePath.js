var simplifyPath = function (path) {
  const arr = [];
  path = path.split("/");
  for (let index = 0; index < path.length; index++) {
    if (path[index] === "." || path[index] === "") continue;
    else if (path[index] === "..") arr.pop();
    else arr.push(path[index]);
  }
  return "/" + arr.join("/");
};

console.log(simplifyPath("/home/user/Documents/../Pictures"));
