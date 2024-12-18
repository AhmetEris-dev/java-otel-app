import React from 'react'
import logo from '../../img/logo.jpg'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './DashboardContent.css'
import WeeklyReservations from '../molecules/Admin/WeeklyReservations';
import Calendar from '../molecules/Admin/NewCalendar';

function DashboardContent() {
    return (
        <>
            <div className="row mt-3">
              
                <div className="col-lg-3 col-6">

                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>150</h3>

                            <p style={{color: 'white', fontWeight: 'bold'}}>Oda Sayısı</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-3 col-6">

                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>

                            <p style={{color: 'white', fontWeight: 'bold'}}>Doluluk Oranı</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars"></i>
                        </div>
                      
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3 style={{color: 'white'}}>44</h3>

                            <p style={{color: 'white', fontWeight: 'bold'}}>Rezervasyon Sayısı</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add"></i>
                        </div>
                    </div>
                </div>
             
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>44</h3>

                            <p style={{color: 'white', fontWeight: 'bold'}}>Müşteri Sayısı</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <WeeklyReservations />
                </div>
                <div className="col-6">
                    <Calendar />
                </div>
            </div>
            
        </>
    )
}

export default DashboardContent