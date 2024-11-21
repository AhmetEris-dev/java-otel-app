import React from 'react'

function FooterCardCompany() {
    return (
        <>
            <h6 style={{ color: '#FEA116' }} className='ms-5 '> COMPANY
                <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
            </h6>
            <div className="bg-dark ms-5 mb-2" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Contact Us</span>
            </div>
            <div className="bg-dark ms-5 mb-2" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Privacy Policy</span>
            </div>
            <div className="bg-dark ms-5 mb-2" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Terms & Condition</span>
            </div>
            <div className="bg-dark ms-5 mb-2" style={{ color: 'white' }}>
                <i className="fa-solid fa-angle-right me-3"></i>
                <span> Support</span>
            </div>
        </>
    )
}

export default FooterCardCompany
