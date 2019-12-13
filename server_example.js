const modbus = require('jsmodbus')
const net = require('net')
const server = new net.Server()
const server_modbus = new modbus.server.TCP(server)

// server_modbus.listen(502)
// server.listen(502)
server.listen(1033)

/*
// create a tcp modbus client
const Modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
// const client = new Modbus.client.TCP(socket, unitId)
const client = new Modbus.client.TCP(socket, 4453)
/*
const options = {
	'host' : host,
	'port' : port
}
*/
