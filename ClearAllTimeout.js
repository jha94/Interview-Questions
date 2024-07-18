const mySetTimeOut = window.setTimeout;
const result = [];
window.setTimeout = (callback, delay) => {
  const id = mySetTimeOut(callback, delay);
  result.push(id);
  return id;
};

function clearAllTimeout() {
  result.forEach((id) => window.clearTimeout(id));
}
