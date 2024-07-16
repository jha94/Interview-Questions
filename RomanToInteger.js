const getRomanToInteger = (str) => {
  const symbolValueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const reverseArr = str.split("").reverse();
  let previousValue = 0;
  return reverseArr.reduce((acc, current) => {
    const currentValue = symbolValueMap[current];
    acc += currentValue >= previousValue ? currentValue : -currentValue;
    previousValue = currentValue;
    return acc;
  }, 0);
  // let result = 0;
  // for (let index = 0; index < reverseArr.length; index++) {
  //   let currentElement = symbolValueMap[reverseArr[index]];
  //   if (previousElement <= currentElement) {
  //     result += currentElement;
  //   } else {
  //     result -= currentElement;
  //   }
  //   previousElement = currentElement;
  // }
  // return result;
};

console.log(getRomanToInteger("MCMXCIX"));
