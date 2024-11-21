import React from 'react'

interface IRoomProps {
    name: string,
    bed: string,
    bath: string,
    wifi: string,
    price: string,
    description: string
}

function RoomCard( props: IRoomProps) {

    const {name, bed, bath, wifi, description, price} = props;

    return (
        <>
            <div className="card shadow" style={{ border: 'none' }} >
                <img src="https://picsum.photos/200/150" className="card-img-top " alt="..." />
                <div className="col-4 mt-1">
                    <small className=" start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4" style={{ backgroundColor: '#FEA116' }}>{price}</small>
                </div>
                <div className="p-4 mt-2">
                    <div className='d-flex justify-content-between mb-3'>
                        <h5 className='mb-0 card-title'>{name}</h5>
                        <div className='ps-2'>
                            <i className="fa-solid fa-star fa-sm" style={{ color: '#FEA116' }}></i>
                            <i className="fa-solid fa-star fa-sm" style={{ color: '#FEA116' }}></i>
                            <i className="fa-solid fa-star fa-sm" style={{ color: '#FEA116' }}></i>
                            <i className="fa-solid fa-star fa-sm" style={{ color: '#FEA116' }}></i>
                            <i className="fa-solid fa-star fa-sm" style={{ color: '#FEA116' }}></i>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <small className='border-end me-3 pe-3'>
                            <i className="fa-solid fa-bed me-2 " style={{ color: '#FEA116' }}></i>
                            {bed}
                        </small>
                        <small className='border-end me-3 pe-3'>
                            <i className="fa-solid fa-bath me-2" style={{ color: '#FEA116' }}></i>
                            {bath}
                        </small>
                        <small className=' me-3 pe-3'>
                            <i className="fa-solid fa-wifi me-2" style={{ color: '#FEA116' }}></i>
                            {wifi}
                        </small>
                    </div>
                    <p>
                        {description}
                    </p>
                    <div className='d-flex justify-content-between mb-3 '>
                        <button style={{ border: 'none', backgroundColor: '#FEA116', color: 'black', width: '150px', fontWeight: 'bold' }} className='btn p-3'>View Detail</button>
                        <button style={{ border: 'none', backgroundColor: 'black', color: 'white', width: '150px', fontWeight: 'bold' }} className='btn p-3'>Book Now</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default RoomCard