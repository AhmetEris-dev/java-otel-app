import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarMenu() {
    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <NavLink to={'/admin'}  className="nav-link">Home</NavLink>
                </li>
               
            </ul>

        </>
    )
}

export default NavbarMenu