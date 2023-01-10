import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './modules/PhonesPage';
import { Footer } from './components/Footer/';
import { NotFoundPage } from './modules/NotFoundPage';
import { CartPage } from './modules/CartPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
