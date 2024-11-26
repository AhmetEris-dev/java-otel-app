import React, { useEffect } from 'react'
import NavbarMenu from '../component/molecules/NavbarMenu'
import SideBarMenu from '../component/molecules/SideBarMenu'


function RoomPage() {

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

            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Responsive Hover Table</h3>

                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{width: '150px'}}>
                                              
                                            </div>
                                        </div>
                                    </div>
                                 
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Oda Türü</th>
                                                    <th>Oda Durumu</th>
                                                    <th>İşlemler</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                        
                                            </tbody>
                                        </table>
                                    </div>
                                   
                                </div>
                              
                            </div>
                        </div>

                    </div>

                </section>

            </div>



        </>
    )
}

export default RoomPage