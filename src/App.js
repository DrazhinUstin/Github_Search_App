import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
    );
};

export default App;
