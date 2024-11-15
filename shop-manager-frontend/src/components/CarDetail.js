// src/components/CarDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarComponents.css'; // Import the styling

const CarDetail = () => {
  const { id } = useParams(); // Get car ID from URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cars/${id}/`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => console.log('Error fetching car details:', error));
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="car-detail-container">
      <h2>Car Details</h2>
      <div className="car-detail">
        <div className="car-info">
          <h3>Car Information</h3>
          <p><strong>License Plate:</strong> {car.license_plate}</p>
          <p><strong>Make:</strong> {car.make}</p>
          <p><strong>Model:</strong> {car.model}</p>
          <p><strong>Color:</strong> {car.color}</p>
        </div>
        <div className="owner-info">
          <h3>Owner Information</h3>
          <p><strong>Owner:</strong> {car.owner.first_name} {car.owner.last_name}</p>
          <p><strong>Email:</strong> {car.owner.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
