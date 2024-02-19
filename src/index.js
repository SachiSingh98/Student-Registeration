import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import DarkThemeProvider from './Context/DarkThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkThemeProvider>
        <App />
    </DarkThemeProvider>
);
