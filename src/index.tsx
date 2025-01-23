import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './main'; // Import directement le composant Home

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
