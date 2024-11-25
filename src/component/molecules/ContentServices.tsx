import React from 'react'
import ServiceCard from '../atoms/ServiceCard'
import { Fade, Slide } from 'react-awesome-reveal'

function ContentServices() {
    return (
        <>
            <Slide direction="up" duration={1000}>
                <div className="row text-center mt-5 mb-5">

                    <h6 style={{ color: '#FEA116' }}> <div className='mb-1 me-1' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} /> OUR SERVİCES
                        <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
                    </h6>
                    <h1 style={{ fontWeight: 'bold' }}> Explore Our <span style={{ color: '#FEA116', fontWeight: 'bold' }}>SERVİCES</span> </h1>
                </div>
            </Slide>

            <Fade direction="up" duration={3000} triggerOnce>
            <div className='row g-4 '>
                <ServiceCard iconType='Hotel' name='Rooms & Apartment' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quod necessitatibus odit cumque ullam voluptatem dolor nisi quasi sequi soluta ab exercitationem laudantium autem ad dolorem architecto, commodi ipsam!
'/>
                <ServiceCard iconType='Food' name='Food & Restaurant' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quod necessitatibus odit cumque ullam voluptatem dolor nisi quasi sequi soluta ab exercitationem laudantium autem ad dolorem architecto, commodi ipsam!
'/>
                <ServiceCard iconType='Spa' name='Spa & Fitness' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quod necessitatibus odit cumque ullam voluptatem dolor nisi quasi sequi soluta ab exercitationem laudantium autem ad dolorem architecto, commodi ipsam!
'/>
                <ServiceCard iconType='Swim' name='Sports & Gaming' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quod necessitatibus odit cumque ullam voluptatem dolor nisi quasi sequi soluta ab exercitationem laudantium autem ad dolorem architecto, commodi ipsam!
'/>
                <ServiceCard iconType='Party' name='Event & Party' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quod necessitatibus odit cumque ullam voluptatem dolor nisi quasi sequi soluta ab exercitationem laudantium autem ad dolorem architecto, commodi ipsam!
'/>
                <ServiceCard iconType='Spor' name='GYM & Yoga' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quod necessitatibus odit cumque ullam voluptatem dolor nisi quasi sequi soluta ab exercitationem laudantium autem ad dolorem architecto, commodi ipsam!
'/>
            </div>
</Fade>
            
        </>
    )
}

export default ContentServices