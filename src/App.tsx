import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
// import { PhoneCard } from './components/PhoneCard';
import { PhonesPage } from './modules/PhonesPage';
import { Footer } from './components/footer';
import { NotFoundPage } from './modules/NotFoundPage';
import { CartPage } from './modules/CartPage';
import { Header } from './components/Header';
import { PhonePagePhotoBlock } from './components/PhonePagePhotoBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PhonePagePhotoBlock />} />
          {/* <Route path="test" element={<PhoneCard />} /> */}
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
