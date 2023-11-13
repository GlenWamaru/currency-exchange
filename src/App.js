// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change here: `Switch` is replaced with `Routes`
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Use `Routes` instead of `Switch` */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/converter" element={<CurrencyConverter />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
