var modbus = require("modbus-stream");

modbus.tcp.server({ debug: "server" }, (connection) => {
  connection.readCoils({ address: 5, quantity: 8 }, (err, info) => {
    console.log("Wenaaaa...")
    console.log("response", info.response.data);
  });
}).listen(12345, () => {
  console.log("Listening...")
  modbus.tcp.connect(12345, { debug: "client" }, (err, connection) => {
    connection.on("read-coils", (request, reply) => {
      console.log("BLEH")
      reply(null, [ 1, 0, 1, 0, 1, 1, 0, 1 ]);
    });
  });

  modbus.tcp.connect(12345, { debug: "client" }, (err, connection) => {
    connection.on("read-coils", (request, reply) => {
      reply(null, [ 1, 0, 1, 0, 1, 1, 0, 1 ]);
    });
  });
});

