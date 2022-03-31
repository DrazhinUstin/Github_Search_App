import React from 'react';
import { useAppContext } from '../context';
import { Languages, Stars, MostPopular, MostForked } from './charts';

const Repos = () => {
    const colors = ['#6d71bc', '#3ec9c4', '#f3807d', '#ffca47', '#76d2f3'];
    const { repos } = useAppContext();
    if (!repos.length) return null;
    return (
        <section className='charts'>
            <Languages repos={repos} />
            <MostPopular {...{ repos, colors }} />
            <Stars repos={repos} />
            <MostForked {...{ repos, colors }} />
        </section>
    );
};

export default Repos;
