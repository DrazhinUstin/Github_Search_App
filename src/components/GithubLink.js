import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubLink = () => {
    return (
        <a
            href='https://github.com/DrazhinUstin/Github_Search_App'
            target='_blank'
            rel='noopener noreferrer'
            className='github-link'
        >
            <FaGithub />
            view on github
        </a>
    );
};

export default GithubLink;
