var modbus = require("modbus-stream");
console.log("Primera linea")

// modbus.tcp.connect(502, "134.2.56.231", { debug: "automaton-2454" }, (err, connection) => {
modbus.tcp.connect(12345, { debug: "automaton-2454" }, (err, connection) => {
  // do something with connection
  console.log("OK")
  connection.on("read-coils", (request, reply) => {
    reply(null, [ 1, 0, 1, 0, 1, 1, 0, 1 ]);
  });
});