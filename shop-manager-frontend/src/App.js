// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Car Management System</h1>
        </header>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:id" element={<CarDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
