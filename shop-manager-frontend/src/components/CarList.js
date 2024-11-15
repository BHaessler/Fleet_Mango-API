// src/components/CarList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CarComponents.css'; // Import CSS file

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cars/')
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.log('Error fetching cars:', error));
  }, []);

  return (
    <div className="car-list-container">
      <h2>Cars List</h2>
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <Link to={`/car/${car.id}`} className="car-link">
              {car.license_plate}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
