import React, { useEffect, useState } from 'react'
import NavbarMenu from '../component/molecules/NavbarMenu'
import SideBarMenu from '../component/molecules/SideBarMenu'
import { JavaOtelDispatch, OtelUseSelector } from '../store'
import { useDispatch } from 'react-redux';
import { fetchGetAllReservation } from '../store/feature/reservationSlice';
import { IReservationResponse } from '../models/IReservationResponse';

function ReservationPage() {

    const [editReservation, setEditReservation] = useState<IReservationResponse | null>(null);

    const [roomId, setRoomId] = useState(0);
    const [adultCount, setAdultCount] = useState('');
    const [childCount, setChildCount] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const reservationList = OtelUseSelector(state => state.reservation.reservationList);
    const dispatch = useDispatch<JavaOtelDispatch>();

    useEffect(() => {
        dispatch(fetchGetAllReservation())
    }, [])

    const updateReservation = () => {
        console.log(roomId);
        console.log(adultCount);
        console.log(childCount);
        console.log(checkInDate);
        console.log(checkOutDate);
        
    }

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
                                        <h3 className="card-title">Rezervasyon Listesi</h3>

                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{ width: '150px' }}>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body table-responsive p-0">
                                        <table id="example1" className="table table-hover text-nowrap text-center">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Oda No</th>
                                                    <th>Müşteri Adı</th>
                                                    <th>Müşteri Email</th>
                                                    <th>Yetişkin Sayısı</th>
                                                    <th>Çocuk Sayısı</th>
                                                    <th>Giriş Tarihi</th>
                                                    <th>Çıkış Tarihi</th>
                                                    <th>İşlemler</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    reservationList.map((reservation, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{reservation.id}</td>
                                                                <td>{reservation.roomId}</td>
                                                                <td>{reservation.customerName}</td>
                                                                <td>{reservation.customerEmail}</td>
                                                                <td>{reservation.adultCount}</td>
                                                                <td>{reservation.childCount}</td>
                                                                <td>{reservation.checkInDate}</td>
                                                                <td>{reservation.checkOutDate}</td>
                                                                <td>
                                                                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => {
                                                                        
                                                                        setEditReservation(reservationList[index]);
                                                                        setRoomId(reservationList[index].roomId);
                                                                        setAdultCount(reservationList[index].adultCount);
                                                                        setChildCount(reservationList[index].childCount);
                                                                        setCheckInDate(reservationList[index].checkInDate);
                                                                        setCheckOutDate(reservationList[index].checkOutDate);
                                                                    }}>
                                                                        <i className="fa-solid fa-pen"></i>
                                                                    </button>

                                                                    <button className='btn btn-danger ms-2' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => {

                                                                    }}>
                                                                        <i className="fa-solid fa-trash"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            </div>
            <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Rezervasyon Güncelleme İşlemleri</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label className='form-label'>Oda No</label>
                            <input type="text" className='form-control mb-2' onChange={evt => {setRoomId(parseInt(evt.target.value))}} value={roomId ? roomId: 0}/>
                            <label className='form-label'>Yetişkin Sayısı</label>
                            <input type="text" className='form-control mb-2' onChange={evt => {setAdultCount(evt.target.value)}} value={adultCount}/>
                            <label className='form-label'>Çocuk Sayısı</label>
                            <input type="text" className='form-control mb-2' onChange={evt => {setChildCount(evt.target.value)}} value={childCount}/>
                            <label className='form-label'>Giriş Tarihi</label>
                            <input type="date" className='form-control mb-2' onChange={evt => {setCheckInDate(evt.target.value)}} value={checkInDate}/>
                            <label className='form-label'>Çıkış Tarihi</label>
                            <input type="date" className='form-control mb-2' onChange={evt => {setCheckOutDate(evt.target.value)}} value={checkOutDate}/>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateReservation}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReservationPage