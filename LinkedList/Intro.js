const LinkedList = function (head, size) {
  this.head = head || null;
  this.size = size || 0;
};

const Node = function (value, next) {
  this.value = value || 0;
  this.next = next || null;
};

LinkedList.prototype.addAtHead = function (value) {
  const node = new Node(value);
  const current = this.getNode(0);
  node.next = current;
  this.head = node;
  this.size++;
};

LinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  return node ? node.value : -1;
};

LinkedList.prototype.getNode = function (index) {
  if (index <= this.size && index >= 0) {
    let position = 0;
    let current = this.head;
    while (position < index) {
      current = current.next;
      position++;
    }
    return current;
  }
};
