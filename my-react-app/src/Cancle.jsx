import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ReservationCard from './ReservationCard';
import "./Cancle.css"

const Cancel = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const {userId} = useParams(); //hook
  
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/user_info/${userId}`);
      const user = response.data;
      console.log(user);
      console.log(user.id);
      setUserData(user);
      setError(null);
    } catch (error) {
      setError('Your booking id is wrong');
      console.error(error);
      setUserData(null);
    }
  };
  const handleCancleBooking = async()=>{
    try{
        const response = await axios.delete(`http://localhost:8080/user_info/${userId}`);
        alert("Your booking is cancelled")
        navigate('/');
    }catch(error){
      setError('Somting went wrong');
      console.error(error);
      setUserData(null);
    }
  }

  return (
    <div className="user-info-container">
      {userData && <ReservationCard reservation={userData} />}
      <button onClick={handleCancleBooking}>Cancle booking</button>
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Cancel;
