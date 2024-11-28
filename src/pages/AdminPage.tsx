import React from 'react'
import NavbarMenu from '../component/molecules/NavbarMenu'
import SideBarMenu from '../component/molecules/SideBarMenu'
import ReservationPage from './ReservationPage'
import DashboardContent from '../component/organisms/DashboardContent'

function AdminPage() {
    return (
        <>
            {/** Navbar Start */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <NavbarMenu />
            </nav>
            {/** Navbar End */}

            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <DashboardContent />
                    </div>
                </section>
            </div>





            {/**Menü Başlangıç */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ height: '100vh' }}>
                <SideBarMenu />
            </aside>
            {/**Menü Bitiş */}


        </>
    )
}

export default AdminPage