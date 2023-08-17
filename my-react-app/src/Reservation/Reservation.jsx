import React, { useState } from 'react';
import './Reservation.css';
import axios from 'axios';

const Reservation = () =>{
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [date , setDate] = useState("");
  const [time , setTime] = useState("");
  const [guests , setGuest] = useState(""); 
  const [err , setErr] = useState(false);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:8080/user_info', {
            name,
            email,
            phone,
            reservation_date: date,
            reservation_time: time,
            number_of_guests: guests
        }); 
        // useEffect(() => {
        //   axios.get('http://localhost:8080/user_info/response.data.userId')
        //       .then(response => setReservations(response.data))
        //       .catch(error => console.error(error));
        //   }, []);
        
        console.log(response.data.userId); // Assuming the server returns a success message or the newly created user data
        // const bookingId = response.data.id;
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setGuest(''); 
        alert("Thank you for booking,Your booking id is "+response.data.userId +" pleasse take a screenshot or take in mind.");
    }catch(error){
        setErr(true);
        console.error(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  );  
}

export default Reservation;
