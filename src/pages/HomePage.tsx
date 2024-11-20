import React from 'react'
import Header from '../component/molecules/Header'
import ContentCarousel from '../component/molecules/ContentCarousel'
import ContentCarouselDate from '../component/molecules/ContentCarouselDate'
import ContentAbout from '../component/molecules/ContentAboutUs'
import ContentAboutRooms from '../component/molecules/ContentAboutRooms'
import ContentServices from '../component/molecules/ContentServices'

function HomePage() {
  return (
    <div className='container'style={{backgroundColor: 'white'}}>
        <div className="row bg-dark" >
            <Header />
        </div>
        {/** Carousel kısmı */}
        <div className="row " style={{backgroundColor:'rgb(238, 245, 248)'}} >
            <ContentCarousel />
        </div>

        <div className="row" >
            <ContentCarouselDate />
        </div>

        <div className="row m-2">
            <ContentAbout />
        </div>
        
        <div className='row ms-2'>
          <ContentAboutRooms />
        </div>

        <div className="row ms-2">
           <ContentServices />
        </div>
    </div>
  )
}

export default HomePage