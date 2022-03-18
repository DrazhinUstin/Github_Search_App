import React from 'react';
import { FaFileCode } from 'react-icons/fa';
import { useAppContext } from '../context';

const Gists = () => {
    const { gists } = useAppContext();
    if (!gists.length) return null;
    return (
        <section className='gists'>
            <div>
                {gists.map((gist, index) => {
                    const { description, html_url } = gist;
                    return (
                        <article key={index}>
                            <span>
                                <FaFileCode />
                            </span>
                            <div>
                                <p>{description || 'w/o description'}</p>
                                <a
                                    href={html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-link'
                                >
                                    view files
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Gists;
