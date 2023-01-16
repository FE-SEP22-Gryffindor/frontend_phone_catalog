/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './modules/PhonesPage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './modules/NotFoundPage';
import { CartPage } from './modules/CartPage';
import { Header } from './components/Header';
import { ItemPage } from './modules/ItemPage';
import { HomePage } from './modules/HomePage';

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="phones/:itemSlug" element={<ItemPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
