import React from 'react'
import FooterCardContact from '../atoms/FooterCardContact'
import FooterCardCompany from '../atoms/FooterCardCompany'
import FooterCardServices from '../atoms/FooterCardServices'

function Footer() {
  return (
    <>
        <div className="col-4 mt-5">
            <FooterCardContact />
        </div>
        <div className="col-4 mt-5">
            <FooterCardCompany />
        </div>
        <div className="col-4 mt-5">
            <FooterCardServices />
        </div>
        <hr style={{ color: 'white' }} />
        
    </>
  )
}

export default Footer