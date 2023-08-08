import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header  from './Header';
import HomePage  from './HomePage';
import Politics  from './Politics';
import Sports  from './Sports';
import Bollywood  from './Bollywood';
import Health  from './Health';
import Business  from './Business';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Politics" element={<Politics />} />
            <Route path="/Bollywood" element={<Bollywood />} />
            <Route path="/Health" element={<Health />} />
            <Route path="/Business" element={<Business />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
