import React from 'react'

function FooterCardServices() {
  return (
    <>
          <h6 style={{ color: '#FEA116' }} className='ms-5 '> SERVİCES
                <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
            </h6>
            <div className="bg-dark ms-5 mb-1" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Food & Restaurant</span>
            </div>
            <div className="bg-dark ms-5 mb-1" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Spa & Fitness </span>
            </div>
            <div className="bg-dark ms-5 mb-1" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Sports & Gaming </span>
            </div>
            <div className="bg-dark ms-5 mb-1" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Event & Party </span>
            </div>
            <div className="bg-dark ms-5 mb-2" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> GYM & Yoga </span>
            </div>
    </>
  )
}

export default FooterCardServices