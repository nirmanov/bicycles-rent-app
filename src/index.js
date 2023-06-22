import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { StoreContextProvider } from './context/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <BrowserRouter basename='/bicycles-rent-app'>
        <App />
      </BrowserRouter>
    </StoreContextProvider>
  </React.StrictMode>
);