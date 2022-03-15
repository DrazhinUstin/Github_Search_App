import React from 'react';
import { useAppContext } from '../context';

const Followers = () => {
    const { followers } = useAppContext();
    if (!followers.length) return null;
    return (
        <section className='followers'>
            <div>
                {followers.map((follower, index) => {
                    const { avatar_url, html_url, login } = follower;
                    return (
                        <article key={index}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a
                                    href={html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-link'
                                >
                                    {html_url}
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Followers;
