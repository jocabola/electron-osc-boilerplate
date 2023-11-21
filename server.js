const { Server } = require('node-osc');

const PORT = 12000;

var server = new Server(PORT, 'localhost', () => {
    console.log(`OSC Server is listening at port ${PORT}`);
});

server.on('message', function (msg) {
    console.log(`Recieved Message: ${msg}`);
});