import React, { useEffect, useContext } from 'react';
import Context from '../store/Context';

export const StartupHandlers = () => {
    const { globalState, globalDispatch } = useContext(Context);
    const { logged } = globalState;

    useEffect(() => {
        fetch('/api/logged')
            .then(res => res.json())
            .then(({logged}) => {
                if (logged) {
                    globalDispatch({type: 'LOGIN'});
                } else {
                    globalDispatch({type: 'LOGOUT'});
                }
            })
    }, []);
    return (
        <div>
            
        </div>
    )
}
