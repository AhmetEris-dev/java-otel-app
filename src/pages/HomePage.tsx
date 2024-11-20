import React from 'react'
import Header from '../component/molecules/Header'
import ContentCarousel from '../component/molecules/ContentCarousel'
import ContentCarouselDate from '../component/molecules/ContentCarouselDate'

function HomePage() {
  return (
    <div className='container'>
        <div className="row gx-0">
            <Header />
        </div>
        {/** Carousel kısmı */}
        <div className="row gx-0">
            <ContentCarousel />
        </div>

        <div className="row gx-0">
            <ContentCarouselDate />
        </div>

        <div className="row">
            
        </div>
    </div>
  )
}

export default HomePage