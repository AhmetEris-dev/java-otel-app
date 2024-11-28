import React from 'react'
import room from '../../pages/RoomPage'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.jpg'
import './SideBarMenu.css'
import { useDispatch, useSelector } from 'react-redux'
import { JavaOtelDispatch, OtelUseSelector } from '../../store'
import { userLogout } from '../../store/feature/authSlice'

function SideBarMenu() {

    const dispatch = useDispatch<JavaOtelDispatch>();
    const profile = OtelUseSelector(state => state.admin.profile);

    const logout = async ()=>{
        await localStorage.removeItem('token');
        dispatch(userLogout());
    }

    return (
        <>
            <NavLink to={'/admin'}  className="brand-link">
                <img src={logo} alt="AdminLTE Logo"  className="brand-image img-circle elevation-3 text-center" style={{ opacity: .8}} />
                <span className="brand-text font-weight-light" >Admin Paneli</span>
            </NavLink>


            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info" >
                        <span className="d-block" style={{color: 'white'}}>{profile?.name}</span>
                    </div>
                   
                   
                </div>
                <div className="row ">
                    <div className='d-grid'>
                        <button className='btn btn-outline-success' onClick={logout}>Çıkış Yap</button>
                    </div>
                    </div>




                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item ">
                            <NavLink to={'/admin/room'} className="nav-link">
                                <i className="fa-solid fa-house ms-1"></i>
                                <p className='ms-2'>
                                    Odalar
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/admin/reservation'} className="nav-link ">
                                <i className="fa-solid fa-clipboard-list ms-1"></i>
                                <p className='ms-2'>
                                    Rezervasyon Listesi
                                </p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default SideBarMenu