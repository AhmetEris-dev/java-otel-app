import React from 'react'
import './ContentAboutUs.css'
import 'animate.css';
import Counter from '../atoms/CounterAnimation';
import { Zoom } from 'react-awesome-reveal';

function ContentAbout() {
    return (
        <div className='row'>
            <div className="col-6">
                <div className="row header-x-row">
                    <h6>About Us
                        <div className='mb-1' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
                    </h6>
                    <h1 style={{ color: 'black', fontWeight: 'bold' }}> Welcome To
                        <span className='header-x-row'> Java Hotel</span>
                    </h1>
                </div>
                <div className="row">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi labore quisquam, voluptas dicta at earum incidunt perferendis ipsa, et voluptate quae, blanditiis praesentium eos tempore repudiandae maxime. Odit, sint.</p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className='border rounded p-1'>
                            <div className='border rounded p-4 text-center'>
                                <i className='fa fa-hotel fa-2x mb-2' style={{ color: '#FEA116' }}></i>
                                <Counter targetValue={1234} />
                                <p className='mb-0'>Rooms</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='border rounded p-1'>
                            <div className='border rounded p-4 text-center'>
                                <i className='fa fa-users-cog fa-2x  mb-2' style={{ color: '#FEA116' }}></i>
                                <Counter targetValue={5000} />
                                <p className='mb-0'>Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='border rounded p-1'>
                            <div className='border rounded p-4 text-center'>
                                <i className='fa fa-users fa-2x  mb-2' style={{ color: '#FEA116' }}></i>
                                <Counter targetValue={9876} />
                                <p className='mb-0'>Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 d-grid mb-3">
                        <button type="button" className="btn btn-warning x-btn-class">Large button</button>
                    </div>

                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 text-end">
                        <Zoom duration={2000}>
                            <img src="https://www.bera.com.tr/assets/upload/fotograflar/beraalanyaotel.jpg?h=397" style={{ marginTop: '33%', width: 200, height: 200 }} alt="Zoom Effect" />
                        </Zoom>
                    </div>
                    <div className="col-6 text-start">
                        <Zoom duration={1000}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6F9gzKAU4cyYV_4o4AW_4_krsnadUaGHlw&s" style={{width: 300, height: 300}}/>
                        </Zoom>
                    </div>
                    <div className="col-6 text-end">
                        <Zoom duration={1000}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTra42T3nKYFOFhfnIh_fSDFmnWz9shOhH6ag&s" style={{ marginTop: '7%', width: 100, height: 100 }} />
                        </Zoom>
                    </div>
                    <div className="col-6 text-start">
                        <Zoom duration={2000}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9Ocm5V3HyU-Nkk8kRc6bdps4cux9Pn8mvg&s" style={{ marginTop: '7%', width: 250, height: 250 }} />
                        </Zoom>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>
    )
}

export default ContentAbout