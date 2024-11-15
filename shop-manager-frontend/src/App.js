// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import './App.css';  // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="App-header">
          <h1>Car Management System</h1>
        </header>
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/car/:id" element={<CarDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
