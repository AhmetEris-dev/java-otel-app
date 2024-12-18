import React, { useEffect, useState } from 'react'
import NavbarMenu from '../../component/molecules/NavbarMenu'
import SideBarMenu from '../../component/molecules/Admin/SideBarMenu'
import { JavaOtelDispatch, OtelUseSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchDeleteRooms, fetchGetAllRooms, fetchNewRooms, fetchUpdateRooms } from '../../store/feature/roomSlice';
import { IRoomRequest } from '../../models/IRoomRequest';
import swal from 'sweetalert'
import { IRoomResponse } from '../../models/IRoomResponse';
import { IRoomUpdateRequest } from '../../models/IRoomUpdateRequest';

import './RoomPage.css'



function RoomPage() {

    const [roomType, setRoomType] = useState('');
    const [roomStatus, setRoomStatus] = useState('');
    const [editRoom, setEditRoom] = useState<IRoomResponse | null>(null);

    const roomList = OtelUseSelector(state => state.room.roomList);
    const dispatch = useDispatch<JavaOtelDispatch>();

    useEffect(() => {
        dispatch(fetchGetAllRooms());
    }, [])

    const createRoom = () => {


        const rooms: IRoomRequest = {
            roomType: roomType
        }

        dispatch(fetchNewRooms(rooms)).then(data => {
            dispatch(fetchGetAllRooms());
            swal('Başarılı', 'Oda ekleme işlemi başarılı...', 'success');

        })
    }

    const updateRoom = () => {
        const updaterooms: IRoomUpdateRequest = {
            id: editRoom?.id,
            roomStatus: roomStatus
        }

        dispatch(fetchUpdateRooms(updaterooms)).then(data => {
            dispatch(fetchGetAllRooms());
            swal('Başarılı', 'Oda güncelleme işlemi başarılı...', 'success');
        })

    }

    const deleteRoom = (id: number) => {

        swal({
            title: "Silmek istiyor musunuz?",
            icon: "warning",
            buttons: {
                cancel: {
                    text: 'Hayır',
                    value: false,
                    visible: true,
                    className: 'swal-button-cancel'
                },
                confirm: {
                    text: 'Evet',
                    value: true,
                    visible: true,
                    className: 'swal-button-confirm'
                },
            }
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(fetchDeleteRooms(id)).then(data => {
                        dispatch(fetchGetAllRooms());
                    });
                    swal("Kaydınız başarılı şekilde silindi!", { icon: "success" });
                } else {
                    swal("Kayıt silme işleminiz iptal edildi!");
                }
            });
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
                                    <div className="card-header ">
                                        <div className="col-6">
                                        <h3 className="card-title mt-3">Oda Listesi</h3>
                                        </div>
                                        
                                        <div className='col-6 text-end'>
                                        <button type="button" className="btn btn-success m-1" style={{ height: '50px', width: '120px', fontSize: '18px', }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Oda Ekle
                                        </button>
                                        </div>
                                       
                                        <div className="card-tools">
                                            <div className="input-group input-group-sm">

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body table-responsive p-0">
                                        <table id="example1" className="table table-hover text-nowrap text-center">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Oda Türü</th>
                                                    <th>Oda Durumu</th>
                                                    <th>İşlemler</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    roomList.map((room, index) => {

                                                        return (
                                                            <tr key={index}>
                                                                <td>{room.id}</td>
                                                                <td>{room.roomType}</td>
                                                                <td>{room.roomStatus}</td>
                                                                <td>
                                                                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => {
                                                                        setEditRoom(roomList[index]);
                                                                        setRoomStatus(roomList[index].roomStatus);
                                                                    }}>
                                                                        <i className="fa-solid fa-pen"></i>
                                                                    </button>


                                                                    <button className='btn btn-danger ms-2' onClick={() => deleteRoom(room.id)}>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Oda Güncelleme</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <select className="form-select" onChange={evt => (setRoomStatus(evt.target.value))} value={roomStatus} style={{ height: '60px' }} aria-label="Default select example">
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="UNAVAILABLE">UNAVAILABLE</option>
                            </select>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateRoom}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Oda Ekleme</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <select className="form-select" onChange={evt => (setRoomType(evt.target.value))} style={{ height: '60px' }} aria-label="Default select example">
                                <option selected>Room Type</option>
                                <option value="JUNIOR_SUITE">JUNIOR_SUITE</option>
                                <option value="EXECUTIVE_SUITE">EXECUTIVE_SUITE</option>
                                <option value="SUPER_DELUXE">SUPER_DELUXE</option>
                            </select>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createRoom} >Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default RoomPage