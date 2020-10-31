import { useReducer } from 'react';
import reducer from './reducer';
import ReconnectingWebSocket from 'reconnecting-websocket';


const websocketUrl = 'ws://localhost:4000';
const websocket = new ReconnectingWebSocket(websocketUrl);

const initialGlobalState = {
    websocketStatus: 'disconnected'
};


const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer, initialGlobalState);

    return { globalState, globalDispatch, websocket };
};

export default useGlobalState;