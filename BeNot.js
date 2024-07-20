const expect = (value) => {
  return {
    toBe: (expectedValue) => {
      return value === expectedValue;
    },
    not: {
      toBe: (expectedValue) => {
        return value !== expectedValue;
      },
    },
  };
};

console.log(expect(3).toBe(3));
console.log(expect(4).not.toBe(3));
