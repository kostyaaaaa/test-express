const EventEmitter = require("events");

const emitter = new EventEmitter();

const listener = (data) => {
  console.log("get req", data);
};

emitter.on("getRequestStarted", listener);

emitter.emit("getRequestStarted", "some simple data");
emitter.emit("getRequestStarted", "some else data");
emitter.emit("getRequestStarted", "else data");
emitter.emit("getRequestStarted", "123 data");

emitter.once("shitHappens", () => {
  console.log("really happens");
});

emitter.emit("shitHappens");

console.log(emitter.eventNames());
console.log(emitter.listeners());
emitter.removeListener("getRequestStarted", listener);
console.log(emitter.eventNames());
