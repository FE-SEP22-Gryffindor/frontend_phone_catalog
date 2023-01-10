import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
// eslint-disable-next-line max-len
import { CartAndFavProvider } from './components/CartAndFavContext/CartAndFavContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <CartAndFavProvider>
    <Router>
      <App />
    </Router>
  </CartAndFavProvider>,
);
