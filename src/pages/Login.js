import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactComponent as Laptop } from '../assets/laptop.svg';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <main className='main main-center login'>
            <Laptop />
            <h1>github search app</h1>
            <button className='btn' onClick={loginWithRedirect}>
                log in / sign up
            </button>
        </main>
    );
};

export default Login;
