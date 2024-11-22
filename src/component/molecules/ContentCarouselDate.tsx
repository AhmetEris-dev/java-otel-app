import React from 'react'
import { Fade } from 'react-awesome-reveal';

function ContentCarouselDate() {

    return (
        <Fade direction="up" duration={2000} delay={500} triggerOnce>
            <div className='row pb-5' style={{ position: 'relative', marginTop: '-50px', marginLeft: '3px', marginRight: '5px' }}>
                <div className="bg-white shadow" style={{ padding: '35px' }}>
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-md-3">
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Adult</option>
                                        <option value="1">Adult 1</option>
                                        <option value="2">Adult 2</option>
                                        <option value="3">Adult 3</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Child</option>
                                        <option value="1">Child 1</option>
                                        <option value="2">Child 2</option>
                                        <option value="3">Child 3</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="col-2 d-grid">
                            <input type="button" value="Submit" style={{ color: 'white', backgroundColor: '#FEA116', border: 'none' }} />
                        </div>
                    </div>

                </div>

            </div>
        </Fade>

    )
}

export default ContentCarouselDate