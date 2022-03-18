import React from 'react';
import { useAppContext } from '../context';

const Followers = () => {
    const { followers, following } = useAppContext();
    return [followers, following].map((item, index) => {
        if (!item.length) return null;
        return (
            <section key={index} className={index === 0 ? 'followers' : 'following'}>
                <div>
                    {item.map((subItem, index) => {
                        const { avatar_url, html_url, login } = subItem;
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
    });
};

export default Followers;
