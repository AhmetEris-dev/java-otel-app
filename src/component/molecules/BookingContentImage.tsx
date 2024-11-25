import { url } from 'inspector'
import React from 'react'
import './BookingContentImage.css'
import img from '../../img/otel-10.webp'

function BookingContentImage() {
  return (
    <div className='container' style={{position: 'relative'}}>
        <img className='booking-img' src={img} style={{width: 1272, height: 500}} />
        <div className="row">
            <h1 className='booking-header' >BOOKING</h1>
        </div>
    </div>
  )
}

export default BookingContentImage