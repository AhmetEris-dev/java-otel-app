import React from 'react'
import { JackInTheBox, Zoom } from 'react-awesome-reveal';

function ContentCarousel() {
    return (
        <>
            <Zoom duration={1000} triggerOnce>
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img src="https://d3m404n3ahyqc3.cloudfront.net/images/product/1/2/0/2/2/187358/limnos_otel_187358.jpg" className="d-block w-100 h-100" style={{ opacity: 0.5}} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://portnature.com.tr/uploads/blogs/turkiye-ultra-otel-1.webp" className="d-block w-100 h-100" style={{ opacity: 0.5}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.turizmajansi.com/images/haber/almanlarin-turkiye-de-ter_019c.jpg" className="d-block w-100 h-100" style={{ opacity: 0.5}}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </Zoom>

        </>
    )
}

export default ContentCarousel