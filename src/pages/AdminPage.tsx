import React from 'react'
import NavbarMenu from '../component/molecules/NavbarMenu'
import SideBarMenu from '../component/molecules/SideBarMenu'

function AdminPage() {
    return (
        <>
            {/** Navbar Start */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <NavbarMenu />
            </nav>
            {/** Navbar End */}

            {/**Menü Başlangıç */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <SideBarMenu />
            </aside>
            {/**Menü Bitiş */}

         
        </>
    )
}

export default AdminPage