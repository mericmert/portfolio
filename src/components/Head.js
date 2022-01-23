import React from 'react';

export default function Head() {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <h3>MERIC&nbsp;MERT&nbsp;BULCA</h3>
            </div>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li><a className='home' href='#'>Home</a></li>
                    <li><a className='resume' href='#'>Resume</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
