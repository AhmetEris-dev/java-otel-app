import React from 'react'
import ServiceCard from '../atoms/ServiceCard'

function ContentServices() {
    return (
        <>
            <div className="row text-center mt-5">

                <h6 style={{ color: '#FEA116' }}> <div className='mb-1 me-1' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} /> OUR SERVİCES
                    <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
                </h6>
                <h1 style={{ fontWeight: 'bold' }}> Explore Our <span style={{ color: '#FEA116', fontWeight: 'bold' }}>SERVİCES</span> </h1>
            </div>

            <div className='row'>
                <ServiceCard />
            </div>
        </>
    )
}

export default ContentServices