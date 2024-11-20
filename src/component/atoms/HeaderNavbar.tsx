import React from 'react'

function HeaderNavbar() {
    return (
        <>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active nav-link-custom" style={{ color: '#FEA116' }} aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={{ color: 'white' }} aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={{ color: 'white' }} aria-current="page" href="#">SERVİCES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={{ color: 'white' }} aria-current="page" href="#">ROOMS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  nav-link-custom" style={{ color: 'white' }} aria-current="page" href="#">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default HeaderNavbar