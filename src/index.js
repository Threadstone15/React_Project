import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>,
  document.getElementById('root')
);
