// for reconnecting see node-net-reconnect npm module

// use socket.on('open', ...) when using serialport
socket.on('connect', function () {

// make some calls

client.readCoils(0, 13).then(function (resp) {

// resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
// the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>

console.log(resp);

}, console.error);

});

socket.connect(options)

