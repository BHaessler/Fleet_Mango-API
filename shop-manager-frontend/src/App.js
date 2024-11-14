// src/App.js
import React from 'react';
import './App.css';
import CarList from './components/CarList';  // Updated import path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Management System</h1>
      </header>
      <main>
        <CarList />
      </main>
    </div>
  );
}

export default App;
