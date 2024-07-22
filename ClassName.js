const classNames = (...args) => {
  let result = "";
  args.forEach((value) => {
    if (typeof value === "string" || Number.isInteger(value)) {
      result += value + " ";
    }
    if (value && typeof value === "object") {
      const keys = Object.keys(value);
      const values = Object.values(value);
      keys.forEach((value, index) => {
        if (values[index]) {
          result += value + " ";
        }
      });
    }
  });
  return result;
};
const obj = new Map();
obj.cool = "!";
console.log(classNames("BFE", "dev", 100));
console.log(classNames(null, undefined, Symbol(), 1n, true, false));
console.log(classNames({ BFE: [], dev: true, is: 3 }, obj));
