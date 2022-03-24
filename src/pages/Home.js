import React from 'react';
import { useAppContext } from '../context';
import { ReactComponent as Loading } from '../assets/loading.svg';
import Navbar from '../components/Navbar';
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
            <>
                <Navbar />
                <main className='main main-center'>
                    <Search />
                    <Loading className='loading' />
                </main>
            </>
        );
    }
    return (
        <>
            <Navbar />
            <main className='main main-center'>
                <Search />
                <UserStats />
                <section className='cards'>
                    <UserInfo />
                    <Followers />
                    <Gists />
                </section>
                <Repos />
            </main>
        </>
    );
};

export default Home;
