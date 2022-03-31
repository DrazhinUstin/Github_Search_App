import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import App from './App';
import { AppProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
            cacheLocation='localstorage'
        >
            <AppProvider>
                <App />
            </AppProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
