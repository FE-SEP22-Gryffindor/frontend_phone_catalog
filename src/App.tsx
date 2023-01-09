import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
// import { PhoneCard } from './components/PhoneCard';
import { PhonesPage } from './modules/PhonesPage';
import { Footer } from './components/footer/Footer';
import { NotFoundPage } from './modules/NotFoundPage';
import { CartPage } from './modules/CartPage';
import { Header } from './components/Header';
import { CartAndFavContext } from './components/CartAndFavContext';

function App() {
  const { FavtList, CartList } = useContext(CartAndFavContext);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(CartList));
  }, [CartList]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(FavtList));
  }, [FavtList]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
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
