import React, { useEffect, useContext } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Context from '../../store/Context';


export const Signin = () => {
    const { globalState, globalDispatch } = useContext(Context);
    const { logged } = globalState;
    let signinModal;

    useEffect(() => {
        // Init modal
        const modalElement = document.querySelector('#signinModal');
        signinModal = M.Modal.init(modalElement, {dismissible: false});
        signinModal.open()
    }, [])

    const handleSignin = () => {
        const modalElement = document.querySelector('#signinModal');
        signinModal = M.Modal.init(modalElement, {dismissible: false});
        fetch('/api/signin')
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    globalDispatch({type: 'LOGIN'});
                    signinModal.close();
                } else {
                    console.error('Error signing in')
                    console.error(response);
                }
            })
    }

    return (
        <div>
            {/* <!-- Modal Structure --> */}
            <div id="signinModal" className="modal">
                <div className="modal-content">
                    <h4>Welcome!</h4>
                    <p>Please choose a user name and a password</p>
                    <input placeholder='User name' type='text'></input>
                    <input placeholder='Password' type='password' className='validate'></input>
                    <input placeholder='Enter your password again' type='password' className='validate'></input>
                </div>
                <div className="modal-footer">
                    <Link to="/" className="waves-effect waves-green btn-flat">Cancel</Link>
                    <div onClick={handleSignin} className="waves-effect waves-green btn-flat">Sign in</div>
                </div>
            </div>
        </div>
    )
}
