import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReservationList.css'; // Make sure the path to your CSS file is correct

const ReservationList = () => {
    const [reservations, setReservations] = useState([]); 
    // const [status,setStatus] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/user_info')
            .then(response => setReservations(response.data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className="table-container">
            <h2>Reservation List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                    </tr>
                </thead>
                <tbody>
                {reservations.map(reservation => (
                    <tr key={reservation.id}>
                        <td>{reservation.id}</td>
                        <td>{reservation.name}</td>
                        <td>{reservation.email}</td>
                        <td>{reservation.phone}</td>
                        <td>{reservation.reservation_date}</td>
                        <td>{reservation.reservation_time}</td>
                        <td>{reservation.number_of_guests}</td>
                    </tr>
                ))}
                    {/* Add more rows for other reservations */}
                </tbody>
            </table>
        </div>
    );
}

export default ReservationList;
