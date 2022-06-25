import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Wolt from './components/deals/Wolt';
import UberEats from "./components/deals/UberEats.js";
import Footer from './components/Footer';
import EToro from './components/deals/EToro';
import Gorillas from './components/deals/Gorillas';
import TradeRepublic from './components/deals/TradeRepublic';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wolt" element={<Wolt />} />
            <Route path="/uber-eats" element={<UberEats />} />
            <Route path="/gorillas" element={<Gorillas />} />
            <Route path="/etoro" element={<EToro />} />
            <Route path="/trade-republic" element={<TradeRepublic />} />
          </Routes>
        </div>

        <Sidebar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
