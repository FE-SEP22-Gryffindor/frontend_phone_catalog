import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { PhonesPage } from './modules/PhonesPage';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/">
          Home Page
        </Link>
        <Link className="App-link" to="/phones">
          PhonesPage
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="phones" element={<PhonesPage />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
