const reverseLinkedList = (list) => {
  // your code
  let current = list;
  let prev = null;
  while (current) {
    [current.next, current, prev] = [prev, current.next, current];
  }
  return prev;
};
