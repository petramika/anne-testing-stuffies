import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Weather } from './pages/Weather';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
);
