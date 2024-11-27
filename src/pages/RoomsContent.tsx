import React from 'react'
import { Slide } from 'react-awesome-reveal'
import RoomCard from '../component/atoms/RoomCard'
import Header from '../component/molecules/Header'
import BookingContentImage from '../component/molecules/BookingContentImage'
import ContentCarouselDate from '../component/molecules/ContentCarouselDate'
import Footer from '../component/molecules/Footer'
import BookingRoomsImage from '../component/molecules/BookingRoomsImage'
import Rooms from '../component/molecules/Rooms'

function RoomsContent() {
  return (
    <>
      <div className='container'>
        <div className="container">
          <div className="row gx-0" >
            <Header page='ROOMS' />
          </div>
        </div>
      </div>
      {/** Booking Resim kısmı */}
      <div className="container" style={{ backgroundColor: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
        <div className="row " >
          <BookingRoomsImage />
        </div>
      </div>
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row" >
          <ContentCarouselDate />
        </div>
      </div>

      {/**Odalar kısmı */}
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row ms-2">
          <Rooms />
        </div>
      </div>

      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row" style={{ height: '50px' }}>
            
        </div>
      </div>

      {/**Footer */}
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row bg-dark ">
          <Footer />

        </div>

      </div>

      {/** Footer Alt */}
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row bg-dark" style={{ height: '25px' }}>
          <span className='ms-5' style={{ color: 'white' }}>
            <i className="fa-regular fa-copyright" style={{ color: 'white' }}></i>
            Java15-Room2</span>
        </div>
      </div>

    </>
  )
}

export default RoomsContent