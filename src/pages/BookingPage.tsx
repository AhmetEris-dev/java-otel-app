import React from 'react'
import Header from '../component/molecules/Header'
import Footer from '../component/molecules/Footer'
import ContentCarouselComment from '../component/molecules/ContentCarouselComment'
import ContentServices from '../component/molecules/ContentServices'
import ContentAboutRooms from '../component/molecules/ContentAboutRooms'
import ContentAbout from '../component/molecules/ContentAboutUs'
import ContentCarouselDate from '../component/molecules/ContentCarouselDate'
import ContentCarousel from '../component/molecules/ContentCarousel'
import BookingContentImage from '../component/molecules/BookingContentImage'
import BookingContent from '../component/molecules/BookingContent'


function BookingPage() {
    return (
        <div className='container'>
        <div className="container">
          <div className="row gx-0" >
            <Header page='BOOKING' />
          </div>
        </div>
  
        {/** Booking Resim kısmı */}
        <div className="container" style={{ backgroundColor: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
          <div className="row " >
            <BookingContentImage />
          </div>
        </div>
  
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div className="row" >
            <ContentCarouselDate />
          </div>
        </div>
  
        {/**About kısmı */}
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div className="row ms-2">
            <BookingContent />
          </div>
        </div>
  
      
  
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div className="row" style={{ height: '50px' }}>
  
          </div>
        </div>
  
        {/**Footer */}
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div className="row bg-dark ">
            <Footer />
  
          </div>
        
        </div>
  
        {/** Footer Alt */}
        <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row bg-dark" style={{ height: '25px' }}>
              <span className='ms-5' style={{color: 'white'}}>
              <i className="fa-regular fa-copyright" style={{color: 'white'}}></i>
                Java15-Room2</span>
          </div>
        </div>
      </div>
    )
}

export default BookingPage