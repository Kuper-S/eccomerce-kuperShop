import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pay from './components/Payment/Pay';
import Success from './components/Payment/Success';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
