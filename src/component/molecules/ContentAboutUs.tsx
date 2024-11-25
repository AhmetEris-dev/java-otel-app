import React from 'react'
import './ContentAboutUs.css'
import 'animate.css';
import Counter from '../atoms/CounterAnimation';
import { Zoom } from 'react-awesome-reveal';
import otel1 from '../../img/otel-4.webp'
import otel2 from '../../img/otel-5.avif'
import otel3 from '../../img/otel-6.jpg'
import otel4 from '../../img/otel-7.avif'

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
                                <Counter targetValue={6891} />
                                <p className='mb-0'>Rooms</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='border rounded p-1'>
                            <div className='border rounded p-4 text-center'>
                                <i className='fa fa-users-cog fa-2x  mb-2' style={{ color: '#FEA116' }}></i>
                                <Counter targetValue={8975} />
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
                        <button type="button" className="btn btn-warning x-btn-class">Explore More</button>
                    </div>

                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 text-end">
                        <Zoom duration={2000}>
                            <img src={otel1} style={{ marginTop: '33%', width: 200, height: 200 }} alt="Zoom Effect" />
                        </Zoom>
                    </div>
                    <div className="col-6 text-start">
                        <Zoom duration={1000}>
                            <img src={otel2} style={{width: 300, height: 300}}/>
                        </Zoom>
                    </div>
                    <div className="col-6 text-end">
                        <Zoom duration={1000}>
                            <img src={otel3} style={{ marginTop: '7%', width: 150, height: 150 }} />
                        </Zoom>
                    </div>
                    <div className="col-6 text-start">
                        <Zoom duration={2000}>
                            <img src={otel4} style={{ marginTop: '7%', width: 250, height: 250 }} />
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