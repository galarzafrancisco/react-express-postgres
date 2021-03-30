// server.js

// This is the entry point. It will create a server with a websocket and
// redirect the requests to the express app.js


// BASE SETUP
// =============================================================================
'use strict';

// Requirements
// -----------------------------------------------------------------------------
const bus = require('./modules/bus/bus');
const server = require('http').createServer();
const websocket = require('./websocket');
const app = require('./app');

// Load environment
const config = require('../config.js');
const port = config.server.backend.port;
console.log('websocket')
console.log(websocket)
// Mount the websocket
const websocketServer = websocket.mountServer(server);
websocketServer.on('connection', client => {
    console.log('New websocket connection');
    client.emit('pedo')

    client.on('message', data => console.log(data))

})
// Mount the app
server.on('request', app.app);


// Start the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
    const message = `http and websocket server listening on port ${port}`;
    console.log(message);
    bus.emit('serverStarted', message);
});
