const reducer = (state, action) => {
    switch(action.type) {
        case 'WEBSOCKET_CONNECTED':
            return {...state, websocketStatus: 'connected'}
        case 'WEBSOCKET_CONNECTING':
            return {...state, websocketStatus: 'connecting'}
        case 'WEBSOCKET_DISCONNECTED':
            return {...state, websocketStatus: 'disconnected'}
        case 'LOGIN':
            return {...state, logged: true}
        case 'LOGOUT':
            return {...state, logged: false}
        default:
            return state
    }
}

export default reducer;