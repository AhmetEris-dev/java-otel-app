import React, { useState } from 'react'
import './ServiceCard.css'

interface IServiceCardProps {
    name: string,
    description: string,
    iconType: 'Hotel' | 'Food' | 'Spa' | 'Swim' | 'Party' | 'Spor'
}

function ServiceCard(props: IServiceCardProps) {

    const { name, description, iconType } = props;

   const [isHover, setIsHover] = useState(false);

    const icons = () => {
        switch (iconType) {
            case 'Hotel': return isHover ? <i className='fa fa-hotel fa-2x' style={{ color: 'white' }}></i> : <i className='fa fa-hotel fa-2x' style={{ color: '#FEA116' }}></i> 
            case 'Food': return isHover ? <i className='fa-solid fa-utensils fa-2x' style={{ color: 'white' }}></i> : <i className='fa-solid fa-utensils fa-2x' style={{ color: '#FEA116' }}></i>
            case 'Spa': return isHover ? <i className='fa-solid fa-spa fa-2x' style={{ color: 'white' }}></i> :  <i className='fa-solid fa-spa fa-2x' style={{ color: '#FEA116' }}></i>
            case 'Swim': return isHover ? <i className='fa-solid fa-person-swimming fa-2x' style={{ color: 'white' }}></i> : <i className='fa-solid fa-person-swimming fa-2x' style={{ color: '#FEA116' }}></i>
            case 'Party': return isHover ? <i className='fa-solid fa-champagne-glasses fa-2x' style={{ color: 'white' }}></i> :  <i className='fa-solid fa-champagne-glasses fa-2x' style={{ color: '#FEA116' }}></i>
            case 'Spor': return isHover ?  <i className='fa-solid fa-dumbbell fa-2x' style={{ color: 'white' }}></i> : <i className='fa-solid fa-dumbbell fa-2x' style={{ color: '#FEA116' }}></i>
        }
    }

  
    
    return (
        <>
            <div className="col-lg-4 col-md-6 shadow m-2 card-x " onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} style={{width: '400px'}}>
                <div className='rounded service-card ' >
                    <div className='bg-transparent border p-1 card-icon'>
                        <div  className='border w-100 h-100 d-flex align-items-center justify-content-center card-x-icon'>
                            {
                                icons() 
                            }
                        </div>
                    </div>
                    <h5 className='mb-3 text-center' style={{ color: isHover ? 'white' : 'black' }}>{name}</h5>
                    <p className='m-2' style={{ color: isHover ? 'white' : 'black' }}>
                        {description}
                    </p>
                </div>
            </div>

        </>
    )
}

export default ServiceCard