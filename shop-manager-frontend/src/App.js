// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link from react-router-dom
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import './App.css';  // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with clickable title */}
        <header className="App-header">
          {/* Wrap the <h1> inside the Link component to make it clickable */}
          <Link to="/" className="header-link">
            <h1>Car Management System</h1>
          </Link>
        </header>
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<CarList />} />  {/* Home Page: Car List */}
            <Route path="/car/:id" element={<CarDetail />} /> {/* Car Detail Page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
