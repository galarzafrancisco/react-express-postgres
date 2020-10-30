// websocket.ks

/*
Websocket handler
*/

// Requirements
// -----------------------------------------------------------------------------
const WSServer = require('ws').Server;


// WebSocket
// =============================================================================

let websocket = null;
mountServer = (server) => {
    websocket = new WSServer({ server });
    return websocket
}

module.exports = {
    websocket,
    mountServer
};