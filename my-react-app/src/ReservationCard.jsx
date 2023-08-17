import React from 'react';
import './ReservationCard.css'; // Make sure the path to your CSS file is correct

const ReservationCard = ({ reservation }) => {
  return (
    <div className="reservation-card">
      <div className="reservation-details">
        <strong>ID:</strong> {reservation.id}
      </div>
      <div className="reservation-details">
        <strong>Name:</strong> {reservation.name}
      </div>
      <div className="reservation-details">
        <strong>Email:</strong> {reservation.email}
      </div>
      <div className="reservation-details">
        <strong>Phone:</strong> {reservation.phone}
      </div>
      <div className="reservation-details">
        <strong>Date:</strong> {reservation.reservation_date}
      </div>
      <div className="reservation-details">
        <strong>Time:</strong> {reservation.reservation_time}
      </div>
      <div className="reservation-details">
        <strong>Guests:</strong> {reservation.number_of_guests}
      </div>
    </div>
  );
};

export default ReservationCard;
