const resultWithinTime = (result) => {
  const startTime = new Date().getSeconds();
  return result.then((value) => {
    const timeToResolve = new Date().getSeconds();
    if (timeToResolve - startTime <= 1) {
      return value;
    } else {
      return "error";
    }
  });
};

const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
  }, 1000);
});

resultWithinTime(result).then((value) => {
  console.log(value);
});
