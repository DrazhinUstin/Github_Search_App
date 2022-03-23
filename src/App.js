import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import { ReactComponent as Loading } from './assets/loading.svg';

const App = () => {
    const { isLoading, isAuthenticated } = useAuth0();
    if (isLoading) {
        return (
            <div className='loading-overlay'>
                <Loading className='loading' />
            </div>
        );
    }
    return (
        <Router>
            <Routes>
                <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to={'login'} />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
    );
};

export default App;
