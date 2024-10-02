// LinkedList
// Node
// addAtHead
// get
// getNode
// addAtTail
// addAtIndex

const LinkedList = function (head, size) {
  this.head = head || null;
  this.size = size || 0;
};

const Node = function (value, next) {
  this.value = value === null ? null : value;
  this.next = next || null;
};

LinkedList.prototype.addAtHead = function (value) {
  const node = new Node(value);
  if (this.head === null) {
    this.head = node;
  }
  const current = this.getNode(0);
  node.next = current.next;
  this.head = node;
  this.size += 1;
};

LinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return "Oops! Please, enter a valid inex";
  }
  const node = this.getNode(index);
  return node.value !== null ? node.value : -1;
};

LinkedList.prototype.getNode = function (index) {
  if (index === 0) {
    return this.head;
  }
  let current = this.head;
  let ind = 0;
  while (ind < index) {
    current = current.next;
    ind += 1;
  }
  return current;
};

LinkedList.prototype.addAtTail = function (value) {
  let node = new Node(value);
  let lastNode = this.getNode(this.size);
  lastNode.next = node;
  this.size++;
};

LinkedList.prototype.addAtIndex = function (index, value) {
  let node = new Node(value);
  if (index === 0) {
    this.addAtHead(value);
  } else {
    let prevNode = this.getNode(index - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    this.size += 1;
  }
};

LinkedList.prototype.getValues = function () {
  const array = [];
  let current = this.head;
  for (let index = 0; index < this.size; index++) {
    array.push(current.value);
    current = current.next;
  }
  const mid = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, mid);
  const secHalf = array.slice(mid);
  let index = 1;
  for (let ind = secHalf.length - 1; ind >= 0; ind--) {
    array[index] = secHalf[ind];
    index += 2;
  }
  return array;
};

const ll = new LinkedList();
ll.addAtIndex(0, 0);
ll.addAtIndex(1, 1);
ll.addAtIndex(2, 2);
ll.addAtIndex(3, 3);
ll.addAtIndex(4, 4);
ll.addAtIndex(5, 5);
ll.addAtIndex(6, 6);
console.log(ll.getValues());
