import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useAppContext } from '../context';

const Search = () => {
    const inputRef = useRef(null);
    const { getGithubData, isLoading, error, requests } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoading) return;
        const value = inputRef.current.value;
        if (!value.trim()) {
            inputRef.current.focus();
        } else {
            getGithubData(value);
        }
    };

    return (
        <section className='search'>
            {error.show && <p className='search-msg'>{error.msg}</p>}
            <form className='search-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter github user' ref={inputRef} />
                <button type='submit' className='round-btn'>
                    <FaSearch />
                </button>
            </form>
            <h2>requests: {requests}/60</h2>
        </section>
    );
};

export default Search;
