import React, { useEffect, useContext } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Context from '../../store/Context';


export const Login = () => {
    const { globalState, globalDispatch } = useContext(Context);
    const { logged } = globalState;
    let loginModal;

    useEffect(() => {
        // Init modal
        const modalElement = document.querySelector('#loginModal');
        loginModal = M.Modal.init(modalElement, {dismissible: false});
        loginModal.open()
    }, [])

    const handleLogin = () => {
        const modalElement = document.querySelector('#loginModal');
        loginModal = M.Modal.init(modalElement, {dismissible: false});
        fetch('/api/login')
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    globalDispatch({type: 'LOGIN'});
                    loginModal.close();
                } else {
                    console.error('Error logging in')
                    console.error(response);
                }
            })
    }

    return (
        <div>
            {/* <!-- Modal Structure --> */}
            <div id="loginModal" className="modal">
                <div className="modal-content">
                    <h4>Welcome back!</h4>
                    <input placeholder='User name' type='text'></input>
                    <input placeholder='Password' type='password' className='validate'></input>
                </div>
                <div className="modal-footer">
                    <Link to="/" className="waves-effect waves-green btn-flat">Cancel</Link>
                    <div onClick={handleLogin} className="waves-effect waves-green btn-flat">Login</div>
                </div>
            </div>
        </div>
    )
}
