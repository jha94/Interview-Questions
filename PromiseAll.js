const promiseAll = (taskList) => {
  const result = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      task
        .then((value) => {
          result[index] = value;
          completed += 1;
          if (completed === taskList.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

const task1 = new Promise((resolve, reject) => {
  resolve("task1");
});

const task2 = new Promise((resolve, reject) => {
  resolve("task2");
});

promiseAll([task1, task2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));
