import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Reservation from './Reservation/Reservation';
import ReservationList from './Reservation/ReservationList';
import ReservationCard from './ReservationCard';
import UserView from './UserView';
import Update from './Update';
import Cancel from './Cancle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Reservation />} /> 
        <Route path='/view/:userId' element={<UserView />} />
        <Route path="/cancle/:userId" element={<Cancel />} />``
        <Route path="/user_info/update/:userId" element={<Update />} /> 
        <Route path="/reservation-list" element={<ReservationList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
