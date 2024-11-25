import React from 'react'
import Header from '../component/molecules/Header'
import ContentCarousel from '../component/molecules/ContentCarousel'
import ContentCarouselDate from '../component/molecules/ContentCarouselDate'
import ContentAbout from '../component/molecules/ContentAboutUs'
import ContentAboutRooms from '../component/molecules/ContentAboutRooms'
import ContentServices from '../component/molecules/ContentServices'
import ContentCarouselComment from '../component/molecules/ContentCarouselComment'
import Footer from '../component/molecules/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className='container'>
      <div className="container">
        <div className="row gx-0" >
          <Header page='HOME' />
        </div>
      </div>

      {/** Carousel kısmı */}
      <div className="container" style={{ backgroundColor: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
        <div className="row " >
          <ContentCarousel />
        </div>
      </div>

      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row" >
          <ContentCarouselDate />
        </div>
      </div>

      {/**About kısmı */}
      <div className="container" style={{ backgroundColor: 'white' }} id='about'>
        <div className="row ms-2">
          <ContentAbout />
        </div>
      </div>

      {/**Odalar Kısmı */}
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className='row ms-2' >
          <ContentAboutRooms />
        </div>
      </div>

      {/** Otel Özellikleri */}
      <div className="container" style={{ backgroundColor: 'white' }} id='roomservice'>
        <div className="row ms-2" >
          <ContentServices />
        </div>
      </div>

      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row" style={{ height: '50px' }}>

        </div>
      </div>

      {/** Yorumlar */}
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row">
          <h6 style={{ color: '#FEA116' }} className='ms-5 text-center '>  <div className='mb-1  me-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />OUR COMMENTS
            <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
          </h6>
          <h1 className='text-center ms-5' style={{ fontWeight: 'bold' }}> Explore Our <span style={{ color: '#FEA116', fontWeight: 'bold' }}>COMMENTS</span> </h1>
        </div>
        <div className="row row-section mt-4">


          <ContentCarouselComment />


        </div>
      </div>

      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row" style={{ height: '50px' }}>

        </div>
      </div>

      {/**Footer */}
      <div className="container" style={{ backgroundColor: 'white' }} id='footer'>
        <div className="row bg-dark ">
          <Footer  />

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

export default HomePage