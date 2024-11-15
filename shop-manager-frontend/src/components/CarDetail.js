// src/components/CarDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();  // Get the car ID from the URL

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cars/${id}/`)
      .then(response => response.json())
      .then(data => setCar(data))
      .catch(error => console.log('Error fetching car details:', error));
  }, [id]);

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p><strong>Make:</strong> {car.make}</p>
      <p><strong>Model:</strong> {car.model}</p>
      <p><strong>License Plate:</strong> {car.license_plate}</p>
      <p><strong>Owner:</strong> {car.owner.first_name} {car.owner.last_name}</p>
      <p><strong>Email:</strong> {car.owner.email}</p>
      {/* You can add more fields if needed */}
    </div>
  );
};

export default CarDetail;
