import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { PhoneCard } from './components/PhoneCard';
import { PhonesPage } from './modules/PhonesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="test" element={<PhoneCard />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
