import React from 'react';
import Search from '../components/Search';
import UserStats from '../components/UserStats';
import UserInfo from '../components/UserInfo';
import Followers from '../components/Followers';
import Repos from '../components/Repos';

const Home = () => {
    return (
        <main className='main main-center'>
            <Search />
            <UserStats />
            <div className='two-column-template' style={{ margin: `4rem 0 2rem` }}>
                <UserInfo />
                <Followers />
            </div>
            <Repos />
        </main>
    );
};

export default Home;
