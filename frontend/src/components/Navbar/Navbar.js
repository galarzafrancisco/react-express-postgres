import React from 'react'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper black">
                <a href="#" className="brand-logo">Full stack app demo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#/about">About</a></li>
                </ul>
            </div>
        </nav>
    )
}
