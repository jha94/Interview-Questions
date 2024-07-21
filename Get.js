const get = (object, keys, defaultValue) => {
  if (!Array.isArray(keys)) {
    keys = keys.split(".");
  }
  keys.forEach((value, index) => {
    if (value.length > 1) {
      keys.splice(index, 1, value.split("")[0], value.split("")[2]);
    }
  });
  let result = object;
  keys.forEach((value, index) => {
    if (index < keys.length) {
      result = result[value];
    }
  });
  return result || defaultValue;
};

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, ["a", "b", "c", "2"]));
