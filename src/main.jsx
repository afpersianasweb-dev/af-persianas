import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CatalogProvider } from './context/CatalogContext';
import { AuthProvider } from './context/AuthContext';

import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <CatalogProvider>
          <App />
        </CatalogProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
