import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './modules/PhonesPage';
import { Header } from './components/Header';

function App() {
  const [burgerMenuStatus, isBurgerMenu] = useState(false);

  return (
    <div className="App">
      <Header burgerMenu={burgerMenuStatus} isBurgerMenu={isBurgerMenu} />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="phones"
            element={<PhonesPage burgerMenu={burgerMenuStatus} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
