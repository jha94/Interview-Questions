const LinkedList = function (head, size) {
  this.head = head || null;
  this.size = size || 0;
};

const Node = function (value, next) {
  this.value = value;
  this.next = next;
};

LinkedList.prototype.addAtHead = function (value) {
  const node = new Node(value);
  const head = this.head;
  node.next = head;
  this.head = node;
  this.size++;
};

const ll = new LinkedList();
ll.addAtHead(1);
ll.addAtHead(2);
ll.addAtHead(4);

const ll2 = new LinkedList();
ll2.addAtHead(1);
ll2.addAtHead(3);
ll2.addAtHead(4);

const mergeList = function (list1, list2) {
  const dummyNode = new Node(Infinity);
  const prevNode = dummyNode;
  while (list1 && list2) {
    if (list1.value >= list2.value) {
      prevNode.next = list2;
      prevNode = list2;
      list2 = list2.next;
    } else {
      prevNode.next = list1;
      prevNode = list1;
      list1 = list1.next;
    }
  }
  if (!list1) prevNode.next = list2;
  if (!list2) prevNode.next = list1;
  return dummyNode.next;
};

mergeList(ll.head, ll2.head);
