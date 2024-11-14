// src/CarList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch car data from the Django API
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/cars/')
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the car data!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) - {car.color} - {car.license_plate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
