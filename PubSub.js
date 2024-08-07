class PubSub {
  constructor() {
    this.subscribers = [];
  }

  subscribe(method) {
    this.subscribers = [...this.subscribers, method];
  }

  publish(payload) {
    this.subscribers.forEach((sub) => sub(payload));
  }

  unsubscribe(method) {
    this.subscribers = this.subscribers.filter((sub) => sub !== method);
  }
}

const pubSub = new PubSub();
const fun = (payload) => {
  console.log(payload.msg);
};

pubSub.subscribe(fun);
pubSub.publish({ msg: "Hola" });
pubSub.unsubscribe(fun);
pubSub.publish({ msg: "Hola" });
