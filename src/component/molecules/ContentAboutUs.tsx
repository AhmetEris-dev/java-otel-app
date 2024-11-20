import React from 'react'
import './ContentAboutUs.css'
import 'animate.css';
import Counter from '../atoms/CounterAnimation';

function ContentAbout() {
    return (
        <div className='row'>
            <div className="col-6">
                <div className="row header-x-row">
                    <h6>About Us
                         <div className='mb-1' style={{width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116'}}/> 
                     </h6>
                    <h1 style={{color: 'black', fontWeight: 'bold'}}> Welcome To 
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
                                <i className='fa fa-hotel fa-2x mb-2' style={{color: '#FEA116'}}></i>
                                <Counter targetValue={1234} />
                                <p className='mb-0'>Rooms</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className='border rounded p-1'>
                            <div className='border rounded p-4 text-center'>
                                <i className='fa fa-users-cog fa-2x  mb-2' style={{color: '#FEA116'}}></i>
                                <Counter targetValue={5000} />
                                <p className='mb-0'>Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className='border rounded p-1'>
                            <div className='border rounded p-4 text-center'>
                                <i className='fa fa-users fa-2x  mb-2' style={{color: '#FEA116'}}></i>
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
                        <img src="https://picsum.photos/200/200" style={{marginTop: '33%'}} />
                    </div>
                    <div className="col-6 text-start">
                         <img src="https://picsum.photos/300/300" />
                    </div>
                    <div className="col-6 text-end">
                        <img src="https://picsum.photos/100/100" style={{marginTop: '7%'}} />
                    </div>
                    <div className="col-6 text-start">
                        <img src="https://picsum.photos/250/250" style={{marginTop: '7%'}} />
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