import React from 'react'
import { Route, useNavigate } from 'react-router-dom'

interface IHeaderProps{
    page: string
}

function HeaderNavbar(props: IHeaderProps) {

    const page = props.page;

    const navigate = useNavigate();

    const getPage = (page: string) => {
        switch(page){
          
            case 'HOME': navigate('/'); break
            case 'BOOKING': navigate('/booking'); break
            case 'ROOMS': navigate('/rooms'); break
            
        }
    }

    const getActive = (route: number) => {
        switch(route){
            case 1 : return  page === 'HOME' ? { color: '#FEA116', cursor: 'pointer' } : { color: 'white', cursor: 'pointer' } 
            case 2 : return  page === 'ABOUT' ? { color: '#FEA116', cursor: 'pointer' } : { color: 'white', cursor: 'pointer' } 
            case 3 : return  page === 'SERVICES' ? { color: '#FEA116', cursor: 'pointer' } : { color: 'white', cursor: 'pointer' } 
            case 4 : return  page === 'ROOMS' ? { color: '#FEA116', cursor: 'pointer' } : { color: 'white', cursor: 'pointer' } 
            case 5 : return  page === 'BOOKING' ? { color: '#FEA116', cursor: 'pointer' } : { color: 'white', cursor: 'pointer' } 
            case 6 : return  page === 'CONTACT' ? { color: '#FEA116', cursor: 'pointer' } : { color: 'white', cursor: 'pointer' } 
        }
    }

    return (
        <>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active-link  nav-link-custom" style={getActive(1)} aria-current="page" onClick={evt => getPage('HOME')}>HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={getActive(2)} aria-current="page"onClick={evt => getPage('ABOUT')} href='#about'>ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={getActive(3)} aria-current="page" onClick={evt => getPage('SERVICES')} href='#roomservice'>SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={getActive(4)} aria-current="page" onClick={evt => getPage('ROOMS')}>ROOMS</a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link   nav-link-custom " style={getActive(5)} aria-current="page"  onClick={evt => getPage('BOOKING')}>BOOKING</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={getActive(6)} aria-current="page" onClick={evt => getPage('CONTACT')} href='#footer'>CONTACT</a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default HeaderNavbar