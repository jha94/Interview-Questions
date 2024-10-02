const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function (key, value) {
  if (!this.map.has(key)) {
    if (this.capacity === this.map.size) {
      for (let keyVal of this.map) {
        this.map.delete(keyVal[0]);
        break;
      }
    }
  }
  this.map.set(key, value);
};

const lruCache = new LRUCache(3);
lruCache.put(1, 1);
lruCache.put(4, 2);
lruCache.put(3, 3);
console.log(lruCache.get(4));
lruCache.put(5, 5);
console.log(lruCache.get(5));
console.log(lruCache.map);
