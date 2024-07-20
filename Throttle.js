const throttle = (callBack, delay) => {
  let flag = true;
  return function (...args) {
    const context = this;
    const args = args;
    if (flag) {
      callBack.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
