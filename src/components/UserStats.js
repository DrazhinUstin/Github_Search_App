import React from 'react';
import { FaBook, FaUsers, FaUserPlus, FaLaptopCode } from 'react-icons/fa';
import { useAppContext } from '../context';

const UserStats = () => {
    const { user } = useAppContext();
    if (!user) return null;
    const { followers, following, public_repos, public_gists } = user;
    const stats = [
        {
            icon: <FaBook />,
            title: public_repos,
            description: 'repos',
        },
        {
            icon: <FaUsers />,
            title: followers,
            description: 'followers',
        },
        {
            icon: <FaUserPlus />,
            title: following,
            description: 'following',
        },
        {
            icon: <FaLaptopCode />,
            title: public_gists,
            description: 'gists',
        },
    ];
    return (
        <section className='user-stats'>
            {stats.map((item, index) => {
                const { icon, title, description } = item;
                return (
                    <article key={index}>
                        <span>{icon}</span>
                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default UserStats;
