import React from 'react'
import { Slide } from 'react-awesome-reveal'
import RoomCard from '../atoms/RoomCard'

function Rooms() {
    return (
        <>
            <Slide direction="up" duration={1000}>
                <div className="row text-center">
                    <h6 style={{ color: '#FEA116' }}> <div className='mb-1 me-1' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} /> OUR ROOMS
                        <div className='mb-1 ms-2' style={{ width: '50px', display: 'inline-block', borderBottom: '3px solid #FEA116' }} />
                    </h6>
                    <h1 style={{ fontWeight: 'bold' }}> Explore Our <span style={{ color: '#FEA116', fontWeight: 'bold' }}>ROOMS</span> </h1>
                </div>
            </Slide>

            <div className="row">
                <div className="col-lg-4 col-md-6 mb-3">
                    <RoomCard name='Junior Suite' bed='3 Bed' bath='2 Bath' wifi='Wifi' price='$100/Night' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, optio reiciendis laborum quaerat asperiores iusto maiores harum sapiente ullam distinctio aliquam aspernatur quis incidunt unde illum eaque quo error eos!
'/>

                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <RoomCard name='Executive Suite' bed='3 Bed' bath='2 Bath' wifi='Wifi' price='$100/Night' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, optio reiciendis laborum quaerat asperiores iusto maiores harum sapiente ullam distinctio aliquam aspernatur quis incidunt unde illum eaque quo error eos!
'/>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <RoomCard name='Super Delux' bed='3 Bed' bath='2 Bath' wifi='Wifi' price='$100/Night' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, optio reiciendis laborum quaerat asperiores iusto maiores harum sapiente ullam distinctio aliquam aspernatur quis incidunt unde illum eaque quo error eos!
'/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <RoomCard name='Junior Suite' bed='3 Bed' bath='2 Bath' wifi='Wifi' price='$100/Night' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, optio reiciendis laborum quaerat asperiores iusto maiores harum sapiente ullam distinctio aliquam aspernatur quis incidunt unde illum eaque quo error eos!
'/>

                </div>
                <div className="col-lg-4 col-md-6">
                    <RoomCard name='Executive Suite' bed='3 Bed' bath='2 Bath' wifi='Wifi' price='$100/Night' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, optio reiciendis laborum quaerat asperiores iusto maiores harum sapiente ullam distinctio aliquam aspernatur quis incidunt unde illum eaque quo error eos!
'/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <RoomCard name='Super Delux' bed='3 Bed' bath='2 Bath' wifi='Wifi' price='$100/Night' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, optio reiciendis laborum quaerat asperiores iusto maiores harum sapiente ullam distinctio aliquam aspernatur quis incidunt unde illum eaque quo error eos!
'/>
                </div>
            </div>
        </>
    )
}

export default Rooms