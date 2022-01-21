import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Wolt from './components/Wolt';
import UberEats from './components/UberEats';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/wolt" element={<Wolt/>} />
          <Route path="/uber-eats" element={<UberEats/>}/>
        </Routes> 
        <footer>
          <hr size="1" width="90%" color="#121810"/>
          <p>© Deal Master | developed in Berlin with ❤</p>
        </footer>
      </div>
    </Router>    
  );
}

export default App;
