// This was asked in Impact Analytics
const arr = [1, 5, 3, 2, 2, 1, 1, 3, 4];

const getSortedMap = (arr) => {
  const map = new Map();
  arr.forEach((value) => {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }
  });
  return new Map([...map.entries()].sort());
};

console.log(getSortedMap(arr));
