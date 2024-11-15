// src/components/CarList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cars/')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.log('Error fetching cars:', error));
  }, []);

  return (
    <div>
      <h2>Cars List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <button>
              <Link to={`/car/${car.id}`}>{car.license_plate}</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
