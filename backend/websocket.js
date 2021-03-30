// websocket.ks

/*
Websocket handler
*/

// Requirements
// -----------------------------------------------------------------------------
const WSServer = require('ws').Server;


// WebSocket
// =============================================================================

let websocketServer = null;
mountServer = (server) => {
    websocketServer = new WSServer({ server });
    return websocketServer
}

module.exports = {
    websocketServer,
    mountServer
};