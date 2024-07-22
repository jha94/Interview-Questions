class EventEmitter {
  eventMap = {};
  subscribe(eventName, callback) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = new Set();
    }
    this.eventMap[eventName].add(callback);
    return {
      release: () => {
        this.eventMap[eventName].delete(callback);
      },
    };
  }

  emit(eventName, ...args) {
    const result = [];
    this.eventMap[eventName].forEach((callBack) => {
      result.push(callBack());
    });
    return result;
  }
}

const callback1 = () => console.log("callback1");
const callback2 = () => console.log("callback2");

const emitter = new EventEmitter();

const sub1 = emitter.subscribe("event1", callback1);
const sub2 = emitter.subscribe("event2", callback2);
console.log(emitter.emit("event1"));
sub1.release();
console.log(emitter.emit("event1"));
