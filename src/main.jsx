// main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import CartProvider from './context/CartProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CartProvider>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
        </CartProvider>
    </BrowserRouter>
);