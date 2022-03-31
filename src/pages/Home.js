import React from 'react';
import { useAppContext } from '../context';
import { ReactComponent as Loading } from '../assets/loading.svg';
import { Navbar, Search, UserStats, UserInfo, Followers, Gists, Repos } from '../components';

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
