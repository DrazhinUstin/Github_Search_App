import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <main className='main main-center page-404'>
            <h1>404</h1>
            <h2>page not found</h2>
            <Link to={'/'} className='btn'>
                back home
            </Link>
        </main>
    );
};

export default Page404;
