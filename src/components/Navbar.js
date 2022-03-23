import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { logout, user } = useAuth0();
    return (
        <nav className='navbar'>
            <div className='main-center'>
                <img src={user.picture} alt={user.name} />
                <p>
                    Welcome, <strong>{user.name}</strong>
                </p>
                <button
                    className='round-btn'
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    log out
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
