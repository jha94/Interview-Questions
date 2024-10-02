var maxArea = function (heights) {
  let start = 0;
  let end = heights.length - 1;
  let area = 0;
  for (let index = 0; index < heights.length; index++) {
    area = Math.max(
      area,
      Math.min(heights[start], heights[end]) * (end - start)
    );
    heights[start] > heights[end] ? end-- : start++;
  }
  console.log(area);
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
