import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationCard from './ReservationCard';
import { useParams } from 'react-router-dom';
import "./UserView.css"
const baseurl = "https://tablebookingback.onrender.com"
const UserView = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const {userId} = useParams();
  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/user_info/${userId}`);
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

  return (
    <div className="user-info-container">
      {userData && <ReservationCard reservation={userData} />}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default UserView;
