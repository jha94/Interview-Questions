// Node
// BST
// isEmpty
// insert
// insertNode
// search
// traversal (inorder, preorder, postorder)

const Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

const BST = function () {
  this.root = null;
};

BST.prototype.isEmpty = function () {
  return this.root === null;
};

BST.prototype.insert = function (value) {
  const node = new Node(value);
  if (this.root === null) {
    this.root = node;
  } else {
    this.insertNode(this.root, node);
  }
};

BST.prototype.insertNode = function (root, node) {
  if (root.value > node.value) {
    if (root.left === null) {
      root.left = node;
    } else {
      this.insertNode(root.left, node);
    }
  } else {
    if (root.right === null) {
      root.right = node;
    } else {
      this.insertNode(root.right, node);
    }
  }
};

BST.prototype.search = function (root, value) {
  if (root === null) {
    return false;
  }
  if (root.value === value) {
    return true;
  } else if (root.value > value) {
    return this.search(root.left, value);
  } else {
    return this.search(root.right, value);
  }
};

BST.prototype.inOrder = function (root) {
  if (root === null) {
    return "no data";
  }
  this.inOrder(root.left);
  console.log(root.value);
  this.inOrder(root.right);
};

BST.prototype.preOrder = function (root) {
  if (root === null) {
    return "no data";
  }
  console.log(root.value);
  this.preOrder(root.left);
  this.preOrder(root.right);
};

BST.prototype.postOrder = function (root) {
  if (root === null) {
    return "no data";
  }
  this.postOrder(root.left);
  this.postOrder(root.right);
  console.log(root.value);
};

BST.prototype.depth = function (root) {
  if (root === null) {
    return 0;
  }
  const queue = [root];
  let length = 0;
  while (queue.length) {
    for (let index = 0; index < queue.length; index++) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    length++;
  }
  return length;
};

BST.prototype.invert = function(root){
  const queue = [root]
  while(queue.length){
    const current = queue.shift()
    if(current){
      [current.left, current.right] = [current.right, current.left]
      queue.push(current.left, current.right)
    }
  }
  return root
}

const bst = new BST();
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(4);
// console.log(bst.root);

// console.log(bst.search(bst.root, 3));
// bst.inOrder(bst.root);
console.log(bst.depth(bst.root));

// bst.preOrder(bst.root);
// bst.postOrder(bst.root);
