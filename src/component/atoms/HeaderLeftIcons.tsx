import React from 'react'

function HeaderLeftIcons() {
    return (
        <>
            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa-solid fa-envelope" style={{ color: '#FEA116' }}></i>
                <p className='m-2'>info@example.com</p>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa-solid fa-phone" style={{ color: '#FEA116' }}></i>
                <p className='m-2'>+012 345 6789</p>
            </div>

           
        </>
    )
}

export default HeaderLeftIcons