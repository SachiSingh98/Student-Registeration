import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ThemeProvider } from '@mui/material';
import { CustomizeFormTheme } from './Components/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={CustomizeFormTheme} >
        <App />
    </ThemeProvider>
);
