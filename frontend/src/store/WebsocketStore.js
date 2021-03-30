import React, { useContext } from 'react';
import Context from './Context';



export const WebsocketStore = () => {
    const { globalState, globalDispatch, websocket } = useContext(Context);
    const { websocketStatus } = globalState;
    websocket.onopen = (event => {
        console.log('Websocket connected');
        globalDispatch({type: 'WEBSOCKET_CONNECTED'});
    })
    websocket.onclose = (event => {
        console.log('Websocket closed');
        globalDispatch({type: 'WEBSOCKET_DISCONNECTED'});
    })
    websocket.onmessage = function(event) {
        console.log('Message received on websocket');
        console.log(event.data);
    }

    return (
        <React.Fragment />
    )
}
