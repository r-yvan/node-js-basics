const EventEmmitter = require("events");
const emitter = new EventEmmitter();

emitter.on("logging", () => {
  console.log("Logging...");
  setTimeout(() => {
    emitter.on("logged", () => {
      console.log("User successfully Logged in!!");
    });
    emitter.emit("logged");
  }, 5000);
});

emitter.emit("logging");
