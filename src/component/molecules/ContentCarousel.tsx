import React from 'react'
import { JackInTheBox, Zoom } from 'react-awesome-reveal';
import otel from '../../img/otel-1.jpg';
import otel2 from '../../img/otel-2.jpg';
import otel3 from '../../img/otel-3.webp';

function ContentCarousel() {
    return (
        <>
            <Zoom duration={1000} triggerOnce>
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img src={otel} className="d-block " style={{width: 1271, height: 700}}  />
                        </div>
                       
                        <div className="carousel-item">
                            <img src={otel3} className="d-block"  style={{width: 1271, height: 700}}/>
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