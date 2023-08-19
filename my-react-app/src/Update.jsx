import React, { useEffect, useState } from 'react';
import './Reservation/Reservation.css';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';


// const baseurl = "https://tablebookingback.onrender.com";
const baseurl = "http://localhost:8080";
const Update = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [date , setDate] = useState("");
  const [time , setTime] = useState("");
  const [guests , setGuest] = useState("");
  const [userExists, setUserExists] = useState(true); // Default to true
  const { userId } = useParams();

  useEffect(() => {
    async function checkUserExists() {
      try {
        const userExistsResponse = await axios.get(`${baseurl}/user_info/${userId}`);
        console.log(userExistsResponse);
        setUserExists(userExistsResponse.status === 200);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setUserExists(false);
        } else {
          console.error(error);
        }
      }
    }

    checkUserExists();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userExists) {
        alert("User with the provided ID does not exist.");
        return;
      }

      const response = await axios.put(`${baseurl}/user_info/update/${userId}`, {
        name,
        email,
        phone,
        reservation_date: date,
        reservation_time: time,
        number_of_guests: guests
      });

      console.log(response.data);
      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setGuest('');
      alert("Thank you for booking");
      Navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {userExists ? (
        <form onSubmit={handleSubmit} method='put'>
        <h1>TABLE RESERVATION</h1>
        <br />
        <div className="con-div">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="con-div">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="con-div">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="con-div">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="con-div">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="con-div">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={guests}
            onChange={(e) => setGuest(e.target.value)}
            min="1"
            max="20"
            required
          />
        </div>
        <br />
        <div className="con-div">
          <button type="submit">Book Table</button>
        </div>
        </form>
      ) : (
        <p style={{ fontSize: '23px', color: 'red', fontWeight: 'bold', textAlign: 'center',marginTop:'10%' }}>
         User does not exist.
        </p>
      )}
    </div>
  );  
}

export default Update;
