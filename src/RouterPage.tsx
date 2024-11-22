import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import BookingRooms from './pages/RoomsContent'
import RoomsContent from './pages/RoomsContent'

function RouterPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/rooms' element={<RoomsContent />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage