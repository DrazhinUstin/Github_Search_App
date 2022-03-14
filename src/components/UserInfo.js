import React from 'react';
import { FaMapMarkerAlt, FaCity, FaGlobe } from 'react-icons/fa';
import { useAppContext } from '../context';

const UserInfo = () => {
    const { user } = useAppContext();
    if (!user) return null;
    const { avatar_url, html_url, name, login, bio, blog, company, location } = user;
    return (
        <section className='user-info'>
            <header className='user-info-header'>
                <div>
                    <img src={avatar_url} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <span>{login}</span>
                    </div>
                </div>
                <a href={html_url} target='_blank' rel='noopener noreferrer' className='btn'>
                    view
                </a>
            </header>
            {bio && <p>{bio}</p>}
            <ul className='user-info-list'>
                {location && (
                    <li>
                        <FaMapMarkerAlt />
                        {location}
                    </li>
                )}
                {company && (
                    <li>
                        <FaCity />
                        {company}
                    </li>
                )}
                {blog && (
                    <li>
                        <FaGlobe />
                        <a
                            href={`https://${blog}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-link'
                        >
                            {blog}
                        </a>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default UserInfo;
