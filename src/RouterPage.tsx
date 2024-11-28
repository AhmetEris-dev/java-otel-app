import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import BookingRooms from './pages/RoomsContent'
import RoomsContent from './pages/RoomsContent'
import AdminPage from './pages/AdminPage'
import RoomPage from './pages/RoomPage'
import ReservationPage from './pages/ReservationPage'
import Login from './pages/LoginPage'
import { useDispatch } from 'react-redux'
import { JavaOtelDispatch, OtelUseSelector } from './store'
import { userLogin } from './store/feature/authSlice'
import { fetchGetProfileByToken } from './store/feature/adminSlice'

function RouterPage() {


  const dispatch = useDispatch<JavaOtelDispatch>();
  const isLogin = OtelUseSelector(state => state.auth.isAuth); 

  /**
   * accesToken -> uygulama içinde istekleri atmak için oturumu yönetmek için kullanılır, geçicidir.
   * Genellikle belli süresi vardır 5 dk gibi, geçerliliği birince login sayfasına dönüş olur.
   * refreshToken -> genellikle uzun süreli ya da süresi token dır. 
   * Temel amacı her oturum için ya da süresi dolan oturumlar için tekrar accessToken almak için kullanılır.
   */

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(userLogin())
      dispatch(fetchGetProfileByToken())
    }
  }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={isLogin ? <AdminPage /> : <Login />} />
            <Route path='/admin/room' element={<RoomPage />} />
            <Route path='/admin/reservation' element={<ReservationPage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/rooms' element={<RoomsContent />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage