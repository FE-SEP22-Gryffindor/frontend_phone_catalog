import React from 'react';
import './App.scss';
import { Link, Routes, Route } from 'react-router-dom';
import { PhoneCard } from './components/PhoneCard';

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
        <Link className="App-link" to="/test">
          test Product Card
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="test" element={<PhoneCard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
