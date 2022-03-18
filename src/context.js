import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();
const useAppContext = () => useContext(AppContext);
const API_ENDPOINT = 'https://api.github.com';

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: '' });
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [gists, setGists] = useState([]);
    const [repos, setRepos] = useState([]);
    const [requests, setRequests] = useState(60);

    const getGithubData = async (login) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_ENDPOINT}/users/${login}`);
            if (!response.ok) {
                setError({ show: true, msg: 'user is not found...' });
            } else {
                const userData = await response.json();
                const { followers_url, following_url, gists_url, repos_url } = userData;
                const urls = [
                    `${followers_url}?per_page=100`,
                    `${following_url.slice(0, -13)}?per_page=100`,
                    `${gists_url.slice(0, -10)}?per_page=100`,
                    `${repos_url}?per_page=100`,
                ];
                const data = await Promise.allSettled(
                    urls.map(async (url) => {
                        const response = await fetch(url);
                        if (!response.ok) return;
                        return await response.json();
                    })
                );
                const [followersData, followingData, gistsData, reposData] = data;
                setUser(userData);
                setFollowers((oldstate) => followersData.value || oldstate);
                setFollowing((oldstate) => followingData.value || oldstate);
                setGists((oldstate) => gistsData.value || oldstate);
                setRepos((oldstate) => reposData.value || oldstate);
                setError({ show: false, msg: '' });
            }
            getRequets();
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const getRequets = async () => {
        const response = await fetch(`${API_ENDPOINT}/rate_limit`);
        const requestsData = await response.json();
        const {
            rate: { remaining: requests },
        } = requestsData;
        setRequests(requests);
        if (!requests) setError({ show: true, msg: 'you have reached the request limit' });
    };

    useEffect(() => {
        getGithubData('john-smilga');
    }, []);

    return (
        <AppContext.Provider
            value={{
                getGithubData,
                isLoading,
                error,
                user,
                followers,
                following,
                gists,
                repos,
                requests,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };
