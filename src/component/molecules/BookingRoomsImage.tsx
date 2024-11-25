import React from 'react'
import img from '../../img/otel-8.jpg'
import './BookingRoomsImage.css'

function BookingRoomsImage() {
  return (
    <div className='container' style={{position: 'relative'}}>
   <img className='room-img' src={img} style={{width: 1272, height: 500, marginLeft: '12px'}} />
    <div className="row">
        <h1 className='room-header' >ROOMS</h1>
    </div>
</div>
  )
}

export default BookingRoomsImage