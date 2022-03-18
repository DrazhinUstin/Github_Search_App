import React from 'react';
import { useAppContext } from '../context';
import { ReactComponent as Loading } from '../assets/loading.svg';
import Search from '../components/Search';
import UserStats from '../components/UserStats';
import UserInfo from '../components/UserInfo';
import Followers from '../components/Followers';
import Gists from '../components/Gists';
import Repos from '../components/Repos';

const Home = () => {
    const { isLoading } = useAppContext();
    if (isLoading) {
        return (
            <main className='main main-center'>
                <Search />
                <Loading className='loading-img' />
            </main>
        );
    }
    return (
        <main className='main main-center'>
            <Search />
            <UserStats />
            <div className='cards'>
                <UserInfo />
                <Followers />
                <Gists />
            </div>
            <Repos />
        </main>
    );
};

export default Home;
