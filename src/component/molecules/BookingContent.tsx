import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import Counter from '../atoms/CounterAnimation'

function BookingContent() {
    return (
        <div className='row'>
            <div className="row">
                <div className="row header-x-row text-center">
                    <h6> <div className='mb-1' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} /> ROOM BOOKING
                        <div className='mb-1 ms-1' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
                    </h6>
                    <h1 style={{ color: 'black', fontWeight: 'bold' }}> BOOK A
                        <span className='header-x-row'> LUXURY ROOM</span>
                    </h1>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <div className="row mt-5">
                        <div className="col-lg-6 mb-3">
                            <input type="text" className='form-control' style={{height: '60px', borderColor: 'black'}} placeholder='Your Name' />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <input type="email" className='form-control' style={{height: '60px', borderColor: 'black'}} placeholder='Your Email' />
                        </div>
                        <div className="col-lg-6">
                            <input type="date" className='form-control' style={{height: '60px', borderColor: 'black'}} placeholder='Check In' />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <input type="date" className='form-control' style={{height: '60px', borderColor: 'black'}} placeholder='Check In' />
                        </div>
                        <div className="col-lg-6">
                            <select className="form-select" style={{height: '60px', borderColor: 'black'}} aria-label="Default select example">
                                <option selected>Adult</option>
                                <option value="1">Adult 1</option>
                                <option value="2">Adult 2</option>
                                <option value="3">Adult 3</option>
                            </select>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <select className="form-select" style={{height: '60px', borderColor: 'black'}} aria-label="Default select example">
                                <option selected>Child</option>
                                <option value="1">Child 1</option>
                                <option value="2">Child 2</option>
                                <option value="3">Child 3</option>
                            </select>
                        </div>
                        <div className="col-12 mb-3"> 
                            <select className="form-select" style={{height: '60px', borderColor: 'black'}} aria-label="Default select example">
                                <option selected>Room</option>
                                <option value="1">Room 1</option>
                                <option value="2">Room 2</option>
                                <option value="3">Room 3</option>
                            </select>
                        </div>
                        <div className="col-12 mb-3">
                            <textarea className='form-control'  placeholder='Special Request' style={{height: '100px', borderColor: 'black'}}></textarea>
                        </div>
                        <div className="col-12 d-grid">
                            <button className='btn btn-warning' style={{backgroundColor: '#FEA116', color: 'white', height: '60px'}}>BOOK NOW</button>
                        </div>


                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 text-end">
                            <Zoom duration={2000}>
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/94/06/f4/selene-beach-spa-hotel.jpg?w=1200&h=-1&s=1" style={{ marginTop: '33%', width: 200, height: 200 }} alt="Zoom Effect" />
                            </Zoom>
                        </div>
                        <div className="col-6 text-start">
                            <Zoom duration={1000}>
                                <img src="https://www.kayak.com.tr/rimg/himg/e2/3b/98/expediav2-305453-b4227c-563368.jpg?width=968&height=607&crop=true"  style={{width: 300, height: 300}}/>
                            </Zoom>
                        </div>
                        <div className="col-6 text-end">
                            <Zoom duration={1000}>
                                <img src="https://imgkit.otelz.com/tr:w-1200,h-500,q-80,fo-auto/turkiye/antalya/alanya/galaxy-beach-hotel-2119068297.jpg" style={{ marginTop: '7%', width: 100, height: 100 }} />
                            </Zoom>
                        </div>
                        <div className="col-6 text-start">
                            <Zoom duration={2000}>
                                <img src="https://www.loresimatravel.com.tr/uploads/hotels/the-lumos-deluxe-resort-hotel-spa-46-e8b436d2c72e7f9cf78f03e4511a448c.jpg" style={{ marginTop: '7%', width: 250, height: 250 }} />
                            </Zoom>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingContent