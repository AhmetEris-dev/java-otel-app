import React from 'react'
import './Header.css'
import HeaderLeftIcons from '../atoms/HeaderLeftIcons'
import HeaderRightIcons from '../atoms/HeaderRightIcons'
import HeaderNavbar from '../atoms/HeaderNavbar'
import { Link } from 'react-router-dom'

interface IHeaderProps {
    page: string
}

function Header(props: IHeaderProps) {

    const page = props.page;

    return (
        <>
            <div className="col-lg-3 bg-dark d-none d-lg-block ">
                <div className='navbar-x-brand d-flex align-items-center justify-content-center ' >
                    <Link to="/" className="text-decoration-none">
                        <h1 className='text-uppercase mt-5' style={{ fontWeight: 800, color: '#FEA116' }}>
                            Java Hotel
                        </h1>
                    </Link>
                </div>

            </div>
            <div className="col-lg-9 shadow">
                <div className="row gx-0 bg-white ">
                    <div className="col-7 text-start px-5">
                        <HeaderLeftIcons />
                    </div>
                    <div className="col-5 text-end">
                        <HeaderRightIcons />
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg bg-dark p-3">
                    <HeaderNavbar page={page} />
                </nav>
            </div>

        </>
    )
}

export default Header