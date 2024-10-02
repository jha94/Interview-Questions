const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let totalTime = 0;
    for (let p of piles) {
      totalTime += Math.ceil(p / mid);
    }
    if (totalTime <= h) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
console.log(minEatingSpeed([25, 10, 23, 4], 4));
