class NodeStore {
  nodes = new Map();
  set(node, value) {
    this.nodes.set(node, value);
  }

  get(node) {
    return this.nodes.get(node);
  }

  has(node) {
    return this.nodes.has(node);
  }
}

const nodeStore = new NodeStore();
nodeStore.set("Name", "Prashant");
console.log(nodeStore.get("Name"));
