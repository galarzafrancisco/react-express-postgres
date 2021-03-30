import React, { useContext } from 'react';
import Context from '../store/Context';



export const WebsocketStatus = () => {
    const { globalState } = useContext(Context);
    const { websocketStatus } = globalState;

    return (
        <div>
            <h6>
            <i className='material-icons' style={{color: websocketStatus === 'connected' ? 'green': 'red'}}>{websocketStatus === 'connected' ? 'check_circle' : 'error'}</i><span> Websocket {websocketStatus}</span>
            </h6>
        </div>
    )
}
