import React from 'react'

function FooterCardContact() {
    return (
        <>
            <h6 style={{ color: '#FEA116' }} className='ms-5'> CONTACT
                <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
            </h6>
            <p style={{ color: 'white' }} >
                <i className="fa-solid fa-location-dot ms-5 me-2" style={{ color: 'white' }}></i>
                123 Street, New York, USA
            </p>
            <p style={{ color: 'white' }}>
                <i className="fa-solid fa-phone ms-5 me-2" style={{ color: 'white' }}>
                </i>
                +90 123 456 7896
            </p>
            <p style={{ color: 'white' }}>
                <i className="fa-solid fa-envelope ms-5 me-2" style={{ color: 'white' }}>
                </i>
                javahotel@java.com
            </p>
            <div className='d-flex mb-3'>
                <i className="fa-brands fa-facebook ms-5 me-3" style={{color: 'white'}}></i>
                <i className="fa-brands fa-x-twitter me-3 " style={{color: 'white'}}></i>
                <i className="fa-brands fa-youtube me-3 " style={{color: 'white'}}></i>
                <i className="fa-brands fa-instagram me-3" style={{color: 'white'}}></i>
            </div>
        </>
    )
}

export default FooterCardContact