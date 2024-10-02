const reverseBothEnd = (arr, index) => {
  const leftReversedArr = arr.slice(0, index).reverse();
  const rightReversedArr = arr.slice(index).reverse();
  return [...leftReversedArr, ...rightReversedArr];
};
console.log(reverseBothEnd([1, 2, 3, 4, 5], 3));
