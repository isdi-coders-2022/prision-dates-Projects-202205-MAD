import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PrisionerContextProvider } from './context/prisioner-provider';
import { Auth0Provider } from '@auth0/auth0-react';

import { PrisionersLocalContextProvider } from './context/local-provider';

import { IndexContextProvider } from './context/index-provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="prision-daters.eu.auth0.com"
            clientId="WNCO0PDkuluCgXoxzCCr7kGKhojG7KGh"
            redirectUri={'http://localhost:3000/selector'}
        >
            <BrowserRouter>
                <IndexContextProvider>
                    <PrisionersLocalContextProvider>
                        <PrisionerContextProvider>
                            <App />
                        </PrisionerContextProvider>
                    </PrisionersLocalContextProvider>
                </IndexContextProvider>
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
