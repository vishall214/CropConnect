import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import './App.css';
import Livestock from './components/Livestock';
import Fertilizer from './components/Fertilizer';
import Subsidy from './components/SubsidyPage';
import AgriculturePage from './components/AgriculturePage';


function App() {
  return (
    <Router>
     
      <Routes>
      
        <Route path="/" element={<AgriculturePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/livestock" element={<Livestock />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/subsidy" element={<Subsidy />} />
      </Routes>
    </Router>
  );
}

export default App;