import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import BookingRooms from './pages/RoomsContent'
import RoomsContent from './pages/RoomsContent'
import AdminPage from './pages/AdminPage'
import RoomPage from './pages/RoomPage'

function RouterPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/room' element={<RoomPage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/rooms' element={<RoomsContent />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage