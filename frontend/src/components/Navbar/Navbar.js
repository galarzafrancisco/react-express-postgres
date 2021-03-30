import React, { useContext } from 'react';
import Context from '../../store/Context';
import { Link } from 'react-router-dom';



export const Navbar = () => {
    const { globalState, globalDispatch } = useContext(Context);
    const { logged } = globalState;

    const handleLogout = () => {
        fetch('/api/logout')
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    globalDispatch({type: 'LOGOUT'});
                } else {
                    console.error('Error logging out')
                    console.error(response);
                }
            })
    }

    return (
        <nav>
            <div className="nav-wrapper black">
                <Link to="/" className="brand-logo">Full</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={logged ? 'hide' : ''}><Link to="/login">Login</Link></li>
                    <li className={logged ? 'hide' : ''}><Link to="/signin">Sign in</Link></li>
                    <li className={logged ? '' : 'hide'}><Link to='#' onClick={handleLogout}>Logout</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}
