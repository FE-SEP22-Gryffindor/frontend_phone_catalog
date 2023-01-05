import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { PhonesPage } from './modules/PhonesPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="phones" element={<PhonesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
