import React, { useEffect, useState }  from 'react'; 
//import axios from 'axios';
//import ReservationCard from './ReservationCard';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const handleCancelBookingClick = () => {
    const userId = window.prompt('Please enter your user ID:');
    if (userId) {
      window.location.href = `/cancle/${userId}`;
    }
  }; 
  const handleViewBookingClick = async() =>{
    const userId = window.prompt('Please enter your user ID:'); 
    if(userId){
      window.location.href = `/view/${userId}`;
    }
  }
  const handleUpdateBookingClick = async() =>{
    const userId = window.prompt('Please enter your user ID:'); 
    if(userId){
      window.location.href = `/user_info/update/${userId}`;
    }
  }
  return (
    <div className="home-container">
      <header className="header">
        <h1 style={{ color: 'red',background:'black' }}>Welcome to Awesome Hotel</h1>
      </header>
      <nav className="tabs">
        <Link to={"/book"}>Book Table</Link>
        <a onClick={handleCancelBookingClick}>Cancel Booking</a>
        <a onClick={handleViewBookingClick}>View Bookings</a>
        <a onClick={handleUpdateBookingClick}>Update Booking</a>
        <Link to={"/reservation-list"}>ReservationList</Link>
      </nav>
      {/* <div className="user-info-container">
        {userData && <ReservationCard reservation={userData} />}
        {error && <h3>{error}</h3>}
      </div> */}
    </div>
  );
};

export default Home;
